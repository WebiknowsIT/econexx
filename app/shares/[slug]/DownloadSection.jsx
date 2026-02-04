'use client';

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function DownloadSection() {
  const [type, setType] = useState("Financial Result");
  const [year, setYear] = useState("");

  const isDisabled = !type || !year;

  const handleDownload = () => {
    console.log({ type, year });
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">
        Download
      </h2>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
          
          {/* Document Type */}
          <div className="relative w-full md:w-64">
            <select
              className="select-styled w-full"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Financial Result">Financial Result</option>
              <option value="Annual Report">Annual Report</option>
              <option value="Presentation">Presentation</option>
            </select>
          </div>

          {/* Year */}
          <div className="relative w-full md:w-48">
            <select
              className="select-styled w-full"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Select Year</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>

          {/* Download Button */}
          <Button
            onClick={handleDownload}
            disabled={isDisabled}
            className={`w-full md:w-auto px-6 py-2.5 rounded-md font-medium
              ${
                isDisabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primary-600 text-white"
              }
            `}
            variant="secondary"
          >
            Download
          </Button>

        </div>
      </div>
    </div>
  );
}
