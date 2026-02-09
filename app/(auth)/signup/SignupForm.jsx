"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";
import { Building, Plane } from "lucide-react";

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState(null); // "resident" | "nri"

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    acceptedTerms: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /* ================= STEP 1 ================= */
  if (step === 1) {
    return (
      <div className="sign-in-form text-center">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <p className="text-gray-500 mt-2">
          Choose your account type
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div
            onClick={() => setAccountType("resident")}
            className={`cursor-pointer bg-white rounded-xl border p-4 text-left transition
              ${accountType === "resident"
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200 hover:border-gray-300"
              }`}
          >
            <div className="flex items-center gap-2">
              <div className={`p-2 w-10 h-10 rounded-md flex items-center justify-center ${accountType === "resident"
                ? "bg-primary-500 text-white"
                : "bg-gray-50"
                }`}>
                <Building />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Resident</h3>
                <p className="text-sm text-gray-500">Indian Citizen</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-primary-600">✔ Buy and Sell Unlisted Shares</li>
              <li className="text-primary-600">✔ India’s trusted platform</li>
            </ul>
          </div>

          {/* NRI */}
          <div
            onClick={() => setAccountType("nri")}
            className={`cursor-pointer bg-white rounded-xl border p-4 text-left transition
              ${accountType === "nri"
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200 hover:border-gray-300"
              }`}
          >
            <div className="flex items-center gap-2">
              <div className={`p-2 w-10 h-10 rounded-md flex items-center justify-center ${accountType === "nri"
                ? "bg-primary-500 text-white"
                : "bg-gray-50 "
                }`}>
                <Plane />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Non-Resident</h3>
                <p className="text-sm text-gray-500">NRI / Foreign</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-primary-600">✔ International transactions</li>
              <li className="text-primary-600">✔ Invest from anywhere</li>
            </ul>
          </div>
        </div>

        <Button
          className="w-full mt-8"
          variant="primary"
          disabled={!accountType}
          onClick={() => setStep(2)}
        >
          Continue
        </Button>
        <p className="my-3 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary hover:text-primary-700 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    );
  }

  /* ================= STEP 2 ================= */
  return (
    <div className="sign-in-form max-w-md mx-auto">
      <button
        type="button"
        onClick={() => setStep(1)}
        className="text-sm text-gray-500 mb-4"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold">Your Details</h2>
      <p className="text-gray-500 mt-1">
        Fill in your information to create your account
      </p>

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          <Input
            label="Last Name"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>

        {/* Country field only for NRI */}
        {accountType === "nri" && (
          <div className="w-full form-group ">
            <label className="form-label">Country of Residence</label>
            <select
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="SG">Singapore</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

        )}

        <div className="flex items-center w-full gap-3">
          <div className="flex-1">
            <Input
              label="Email"
              className="w-full"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <Button variant="primary" className="shrink-0 h-[42px] mt-4">
            Verify
          </Button>
        </div>

        <div className="flex items-center w-full gap-3">
          <div className="flex-1">
            <Input
              label="Phone"
              className="w-full"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <Button variant="primary" className="shrink-0 h-[42px] mt-4">
            Verify
          </Button>
        </div>

        <div className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            checked={formData.acceptedTerms}
            onChange={(e) =>
              handleChange("acceptedTerms", e.target.checked)
            }
            className="mt-1"
          />
          <span>
            I accept the{" "}
            <Link href="#" className="text-primary-600 font-medium">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary-600 font-medium">
              Privacy Policy
            </Link>
          </span>
        </div>

        <Button
          className="w-full mt-4"
          variant="primary"
          disabled={!formData.acceptedTerms}
        >
          Create Account
        </Button>
      </div>
    </div>
  );
}
