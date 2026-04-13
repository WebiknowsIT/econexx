"use client";

import toast from "react-hot-toast";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";

import { userLogin } from "@/store/action/authActions";
import { resetLoginData } from "@/store/slices/authSlice";
import { LogIn, LogInIcon } from "lucide-react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error, userInfo, loginResponse } = useSelector((state) => state.auth);

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

  // ✅ Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      userLogin({
        email: formData.email,
        password: formData.password,
      })
    );
  };

  // ✅ Handle success (redirect)
  useEffect(() => {
    if (loginResponse && userInfo) {
      toast.success("Login successful");
      router.push("/");
    }
  }, [loginResponse, userInfo, router]);

  useEffect(() => {
  if (error) {
    toast.error(error);
  }
}, [error]);


  return (
    <div className="sign-in-form">
      <h2 className="heading30">Log In</h2>
      <p className="text-gray-500">
        Enter your registered email address to sign in
      </p>

      <form className="mt-4" onSubmit={handleSubmit} autoComplete="off">
        {/* Email */}
        <Input
          className="input-styled"
          label="Email Address"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
        />

        {/* Password */}
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

        {/* Error Message */}
        {/* {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )} */}

        {/* Forgot */}
        <div className="text-right mb-3">
          <Link
            href="/forgot-password"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Forgot password?
          </Link>
        </div>

        {/* Button */}
        <div className="text-center">
          <Button
            className="w-full" 
            size="lg" 
            variant="secondary" 
            type="submit"
            disabled={isDisabled || loading}>
             <LogIn className="w-4 h-4 mr-2" />  {loading ? "Logging in..." : "Log In"} 
          </Button>
          {/* <Button
            className="w-full"
            variant="primary"
            
          >
            {loading ? "Logging in..." : "Log In"}
          </Button> */}

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
  );
}