"use client";

import {useState } from "react";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";

export default function LoginForm() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const isDisabled = !formData.email || !formData.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <>
      <div className="sign-in-form">
        <h2 className="heading30">Log In</h2>
        <p className="text-gray-500">
          Enter your registered email address to sign in
        </p>

        <form className="mt-4" onSubmit={handleSubmit} autoComplete="off">
          <Input
            className="input-styled"
            label="Email Address"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />

          <Input
            className="input-styled relative"
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            showEyeIcon
            onClickEye={togglePasswordVisibility}
            required
          />

          <div className="text-right mb-3">
            <Link
              href="/forgot-password"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <div className="text-center">
            <Button
              className="w-full"
              variant="primary"
              type="submit"
              disabled={isDisabled}
            >
              Log In
            </Button>

            <p className="my-3 text-gray-600">
              New User?{" "}
              <Link
                href="/signup"
                className="text-primary hover:text-primary-700 font-medium"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
