'use client';

import { useState } from "react";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button";

export default function CreateAlertCard() {
  const [targetPrice, setTargetPrice] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!targetPrice || !email) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log({ targetPrice, email });
  };

  return (
    <div className="border border-slate-300 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">
        Create Alert
      </h3>

      {/* Target Price */}
      <Input
        className="input-styled"
        label="Target Price"
        type="number"
        placeholder="Target Price"
        value={targetPrice}
        onChange={(e) => setTargetPrice(e.target.value)}
        errorMessage={!targetPrice && error ? "Enter target price" : ""}
      />

      {/* Email */}
      <Input
        className="input-styled"
        label="Your Email"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={!email && error ? "Enter valid email" : ""}
      />

      {/* Submit Button */}
      <Button
        disabled={!!error || !targetPrice || !email}
        onClick={handleSubmit}
        className={`mt-4 w-full py-2.5 rounded-md font-medium
          ${
            error || !targetPrice || !email
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-primary-600 text-white"
          }`}
        variant="primary"
      >
        Create Alert
      </Button>
    </div>
  );
}
