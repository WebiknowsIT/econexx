'use client';

import Image from "next/image";
import { useState } from "react";

export default function ValuationCard() {
 

  return (
    <div className="border border-slate-300 rounded-xl p-0 overflow-hidden">
      <h3 className="text-lg font-semibold mb-0 px-6 pt-4 text-center">
        Valuations
      </h3>
      <Image
        src="/images/creditScore.svg"
        alt="Credit Score"
        width={500}
        height={120}
        priority
      />
    </div>
  );
}
