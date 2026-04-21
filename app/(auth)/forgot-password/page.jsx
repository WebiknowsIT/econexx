"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import toast from "react-hot-toast";
import "@/styles/auth.scss";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";
import { CheckCircle2 } from "lucide-react";
import { sendOtp, verifyOtp } from "@/store/action/authActions";
import { setOtpEmail, setOtpStep } from "@/store/slices/authSlice";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Redux state
  const { loading, error, otpStep, otpVerified, otpEmail } = useSelector(
    (state) => state.auth
  );

  // Local state for form data
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      const result = await dispatch(
        sendOtp({ login: formData.email, channel: "auto" })
      ).unwrap();
      
      dispatch(setOtpEmail(formData.email));
      toast.success(result.message || "OTP sent successfully");
    } catch (err) {
      toast.error(err?.message || "Failed to send OTP");
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!formData.otp) {
      toast.error("Please enter the OTP");
      return;
    }

    try {
      const result = await dispatch(
        verifyOtp({ login: otpEmail || formData.email, otp: formData.otp })
      ).unwrap();
      
      toast.success(result.message || "OTP verified successfully");
      // Redirect to reset password page
      setTimeout(() => {
        router.push("/reset-password");
      }, 500);
    } catch (err) {
      toast.error(err?.message || "Invalid OTP");
    }
  };

  return (
    <div className="sign-in-form">
      {/* ================= STEP 1: Send OTP ================= */}
      {otpStep === 1 && (
        <>
          <h2 className="heading30">Forgot Password?</h2>
          <p className="text-gray-500">
            Enter your registered email address to receive an OTP for password reset
          </p>

          <form className="mt-4" onSubmit={handleSendOtp} autoComplete="off">
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />

            {error?.type === "validation" && error?.errors?.login && (
              <p className="text-red-500 text-sm mt-2">
                {error.errors.login?.[0] || "Invalid email"}
              </p>
            )}

            <div className="text-center mt-4">
              <Button
              size="lg"
                className="w-full"
                variant="secondary"
                type="submit"
                disabled={!formData.email || loading}
                isLoading={loading}
              >
                {loading ? "Sending..." : "Send OTP"}
              </Button>
            </div>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </>
      )}

      {/* ================= STEP 2: Verify OTP ================= */}
      {otpStep === 2 && (
        <>
          <h2 className="heading30">Verify OTP</h2>
          <p className="text-gray-500">
            Enter the OTP sent to <strong>{otpEmail || formData.email}</strong>
          </p>

          <form className="mt-4" onSubmit={handleVerifyOtp} autoComplete="off">
            <Input
              label="OTP"
              type="text"
              placeholder="Enter 6-digit OTP"
              value={formData.otp}
              onChange={(e) => handleChange("otp", e.target.value)}
              maxLength="6"
              required
            />

            {error?.type === "validation" && error?.errors?.otp && (
              <p className="text-red-500 text-sm mt-2">
                {error.errors.otp?.[0] || "Invalid OTP"}
              </p>
            )}

            {error?.type === "general" && (
              <p className="text-red-500 text-sm mt-2">{error.message}</p>
            )}

            <div className="text-center mt-4">
              <Button
              size="lg"
                className="w-full"
                variant="secondary"
                type="submit"
                disabled={!formData.otp || loading}
                isLoading={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>
            </div>

            <button
              type="button"
              onClick={handleSendOtp}
              className="mt-2 text-primary text-sm hover:underline w-full"
            >
              Resend OTP
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            <button
              type="button"
              onClick={() => {
                dispatch(setOtpStep(1));
                setFormData({ email: "", otp: "" });
              }}
              className="text-primary font-medium hover:underline"
            >
              Back
            </button>
          </p>
        </>
      )}

      {/* ================= STEP 3: Success ================= */}
      {otpVerified && (
        <div className="text-center">
          <div className="flex justify-center text-green-500 mb-2">
            <CheckCircle2 size={50} />
          </div>
          <h2 className="heading30">OTP Verified!</h2>
          <p className="text-gray-500 mt-2">
            Proceed to set your new password.
          </p>

          <div className="mt-6">
            <Button
              className="w-full"
              variant="primary"
              onClick={() => router.push("/reset-password")}
            >
              Continue to Reset Password
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
