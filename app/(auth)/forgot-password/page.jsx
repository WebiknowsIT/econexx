"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/auth.scss";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";
import { CheckCircle, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="sign-in-form">
      {step === 1 && (
        <>
          <h2 className="heading30">Email</h2>
          <p className="text-gray-500">
            Enter your registered email address to receive a password reset link
          </p>

          <form className="mt-4" onSubmit={handleSubmit} autoComplete="off">
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="text-center mt-4">
              <Button
                className="w-full"
                variant="primary"
                type="submit"
                disabled={!email}
              >
                Next
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

      {step === 2 && (
        <div className="text-center">
            <div className="flex justify-center text-green-500 mb-2">
                <CheckCircle2 size={50} />
            </div>
          <h2 className="heading30">Check Your Email!</h2>
          <p className="text-gray-500 mt-2">
            If an account exists with this email, a password reset link has been
            sent. Please follow the instructions to reset your password.
          </p>

          <div className="mt-6">
            <Link href="/login">
              <Button className="w-full" variant="primary">
                Back to Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
