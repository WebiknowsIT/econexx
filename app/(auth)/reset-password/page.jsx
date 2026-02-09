"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/auth.scss";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";

export default function ResetPasswordPage() {
  const [step, setStep] = useState(1);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI only – API logic will be added later
    setStep(2);
  };

  return (
    <div className="sign-in-form">

      {/* ================= STEP 1 ================= */}
      {step === 1 && (
        <>
          <h2 className="heading30">Reset Your Password</h2>

          <form className="mt-4" onSubmit={handleSubmit} autoComplete="off">
            <Input
              label="New Password"
              type={newPasswordVisible ? "text" : "password"}
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={(e) =>
                handleChange("newPassword", e.target.value)
              }
              showEyeIcon
              onClickEye={() =>
                setNewPasswordVisible((prev) => !prev)
              }
              required
            />

            <Input
              label="Confirm New Password"
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleChange("confirmPassword", e.target.value)
              }
              showEyeIcon
              onClickEye={() =>
                setConfirmPasswordVisible((prev) => !prev)
              }
              required
            />

            <div className="text-center mt-4">
              <Button
                className="w-full"
                variant="primary"
                type="submit"
                disabled={
                  !formData.newPassword ||
                  !formData.confirmPassword
                }
              >
                Next
              </Button>
            </div>
          </form>
        </>
      )}

      {/* ================= STEP 2 ================= */}
      {step === 2 && (
        <div className="text-center">
          <h2 className="heading30">Password Changed!</h2>
          <p className="text-gray-500">
            Your password has been successfully changed.
          </p>

          <div className="mt-6">
            <Link href="/login">
              <Button className="w-full" variant="primary">
                Login Again
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
