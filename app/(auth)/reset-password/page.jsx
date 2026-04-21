"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import toast from "react-hot-toast";
import "@/styles/auth.scss";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";
import { resetPassword, sendOtp } from "@/store/action/authActions";
import { resetOtpFlow } from "@/store/slices/authSlice";

export default function ResetPasswordPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Redux state
  const { loading, error, otpVerified, resetPasswordResponse, otpEmail, verifiedOtp: reduxVerifiedOtp } = useSelector(
    (state) => state.auth
  );

  // Use Redux OTP or fallback to sessionStorage
  const verifiedOtp = reduxVerifiedOtp || (typeof window !== 'undefined' ? sessionStorage.getItem('verifiedOtp') : null);

  // Local state
  const [step, setStep] = useState(1);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  // Redirect on successful password reset
  useEffect(() => {
    if (resetPasswordResponse) {
      toast.success("Password reset successfully!");
      setStep(2);
      setTimeout(() => {
        dispatch(resetOtpFlow());
        router.push("/login");
      }, 1500);
    }
  }, [resetPasswordResponse, dispatch, router]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!verifiedOtp) {
      toast.error("OTP verification data is missing. Please start over.");
      router.push("/forgot-password");
      return;
    }

    if (!formData.password) {
      toast.error("Please enter a password");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    try {
      const payload = {
        login: otpEmail,
        otp: verifiedOtp,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      };
      
      await dispatch(
        resetPassword(payload)
      ).unwrap();
    } catch (err) {
      if (err?.errors?.password) {
        toast.error(err.errors.password?.[0] || "Password reset failed");
      } else if (err?.errors?.password_confirmation) {
        toast.error(err.errors.password_confirmation?.[0] || "Passwords do not match");
      } else {
        toast.error(err?.message || "Password reset failed");
      }
    }
  };

  if (!otpVerified) {
    return null;
  }

  return (
    <div className="sign-in-form">
      {/* ================= STEP 1: Reset Password ================= */}
      {step === 1 && (
        <>
          <h2 className="heading30">Reset Your Password</h2>
          <p className="text-gray-500 mt-1">
            Enter a new password to secure your account
          </p>

          <form className="mt-4" onSubmit={handleSubmit} autoComplete="off">
            <Input
              label="New Password"
              type={newPasswordVisible ? "text" : "password"}
              placeholder="Enter new password (min 8 characters)"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              showEyeIcon
              onClickEye={() => setNewPasswordVisible((prev) => !prev)}
              required
            />

            {error?.errors?.password && (
              <p className="text-red-500 text-sm mt-2">
                {error.errors.password?.[0]}
              </p>
            )}

            <Input
              label="Confirm New Password"
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              showEyeIcon
              onClickEye={() =>
                setConfirmPasswordVisible((prev) => !prev)
              }
              required
            />

            {error?.errors?.password_confirmation && (
              <p className="text-red-500 text-sm mt-2">
                {error.errors.password_confirmation?.[0]}
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
                disabled={
                  !formData.password ||
                  !formData.confirmPassword ||
                  loading
                }
                isLoading={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </Button>
            </div>
          </form>

          <p className="mt-4 text-center text-gray-600">
            <button
              type="button"
              onClick={() => {
                dispatch(resetOtpFlow());
                router.push("/forgot-password");
              }}
              className="text-primary font-medium hover:underline"
            >
              Start Over
            </button>
          </p>
        </>
      )}

      {/* ================= STEP 2: Success ================= */}
      {step === 2 && (
        <div className="text-center">
          <h2 className="heading30">Password Changed!</h2>
          <p className="text-gray-500">
            Your password has been successfully reset. Redirecting to login...
          </p>

          <div className="mt-6">
            <Link href="/login">
              <Button className="w-full" variant="primary">
                Go to Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
