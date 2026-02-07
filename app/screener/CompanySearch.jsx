'use client';

import Input from "@/components/ui/Input/Input";

export default function CompanySearch({ value, onChange }) {
  return (
    <div className="w-full py-5">
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search Company Name..."
        className="input-styled w-full bg-white"
        bgIcon="/images/icons/search.svg"
      />
    </div>
  );
}
