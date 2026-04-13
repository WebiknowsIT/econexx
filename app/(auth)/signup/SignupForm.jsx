"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";
import { Building, Plane } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { registerUser } from "@/store/action/authActions";
import toast from "react-hot-toast";
import Checkbox from "../../../components/ui/Checkbox";

export default function SignupForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error, signUpResponse } = useSelector((state) => state.auth);

  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState(null);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    country: "",
    terms_accepted: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ================= SUBMIT =================
  const handleSubmit = () => {
    // if (formData.password !== formData.password_confirmation) {
    //   toast.error("Passwords do not match");
    //   return;
    // }

    const payload = {
      ...formData,
      account_type: accountType === "nri" ? "non_resident" : "resident",
    };

    dispatch(registerUser(payload));
  };

  // ================= EFFECTS =================
  useEffect(() => {
    if (signUpResponse) {
      toast.success("Registration successful");
      router.push("/");
    }
  }, [signUpResponse, router]);

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //   }
  // }, [error]);

  const getError = (field) => {
    return error?.errors?.[field]?.[0] || null;
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
          {/* Resident */}
          <div
            onClick={() => setAccountType("resident")}
            className={`cursor-pointer bg-white rounded-xl border p-4 text-left transition
              ${accountType === "resident"
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200 hover:border-gray-300"
              }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`p-2 w-10 h-10 rounded-md flex items-center justify-center ${accountType === "resident"
                    ? "bg-primary-500 text-white"
                    : "bg-gray-50"
                  }`}
              >
                <Building />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Resident</h3>
                <p className="text-sm text-gray-500">
                  Indian Citizen
                </p>
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
              <div
                className={`p-2 w-10 h-10 rounded-md flex items-center justify-center ${accountType === "nri"
                    ? "bg-primary-500 text-white"
                    : "bg-gray-50"
                  }`}
              >
                <Plane />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Non-Resident
                </h3>
                <p className="text-sm text-gray-500">
                  NRI / Foreign
                </p>

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

        <p className="my-3 text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium">
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

      <div className="mt-6 space-y-4">
        {/* Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              label="First Name"
              value={formData.first_name}
              onChange={(e) =>
                handleChange("first_name", e.target.value)
              }
            />

          </div>
          <div>
            <Input
              label="Last Name"
              value={formData.last_name}
              onChange={(e) =>
                handleChange("last_name", e.target.value)
              }
            />
            {getError("last_name") && (
              <p className="text-red-500 text-sm">
                {getError("last_name")}
              </p>
            )}

          </div>
        </div>

        {/* Country */}
        {accountType === "nri" && (
          <select
            value={formData.country}
            onChange={(e) =>
              handleChange("country", e.target.value)
            }
            className="w-full border p-3 rounded"
          >
            <option value="">Select country</option>
            <option value="United States">
              United States
            </option>
            <option value="United Kingdom">
              United Kingdom
            </option>
          </select>
        )}

        {/* Email */}
        <div>
          <Input
            label="Email"
            value={formData.email}
            onChange={(e) =>
              handleChange("email", e.target.value)
            }
          />
          {getError("email") && (
            <p className="text-red-500 text-sm">
              {getError("email")}
            </p>
          )}
        </div>


        {/* Phone */}
        <div>
          <Input
            label="Phone"
            value={formData.phone}
            onChange={(e) =>
              handleChange("phone", e.target.value)
            }
          />
          {getError("phone") && (
            <p className="text-red-500 text-sm">
              {getError("phone")}
            </p>
          )}
        </div>


        {/* Password */}
        <div>
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              handleChange("password", e.target.value)
            }
          />

          {getError("password") && (
            <p className="text-red-500 text-sm">
              {getError("password")}
            </p>
          )}

        </div>
        <div>
          <Input
            label="Confirm Password"
            type="password"
            value={formData.password_confirmation}
            onChange={(e) =>
              handleChange(
                "password_confirmation",
                e.target.value
              )
            }
          />
          {getError("password_confirmation") && (
            <p className="text-red-500 text-sm">
              {getError("password_confirmation")}
            </p>
          )}
        </div>




        {/* Terms */}
        <div className="flex items-center gap-2">
          <Checkbox
            name="terms_accepted"
            checked={formData.terms_accepted}
            onChange={(e) => handleChange("terms_accepted", e.target.checked)}
          />
          <span>
            I accept the {' '}
            <Link className="text-primary-600 font-bold" href="/terms-and-conditions">
              Terms &amp; Conditions</Link> and {' '}
            <Link className="text-primary-600 font-bold" href="/privacy-policy">
              Privacy Policy</Link>
          </span>
        </div>
        <Button
          size="lg"
          className="w-full mt-4"
          variant="secondary"
          disabled={!formData.terms_accepted || loading}
          onClick={handleSubmit}
        >
          {loading ? "Creating..." : "Create Account"}
        </Button>
      </div>
    </div>
  );
}