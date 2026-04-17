"use client";

import {
  Calendar,
  IndianRupee,
  Rocket
} from "lucide-react";

import Button from "@/components/ui/Button";
import StatusTag from "@/components/ui/StatusTag/StatusTag";



export default function DrhpStockCard({ company, onInterest }) {

    const getVariant = (badge) => {
    const map = {
        DRHP: "Submitted",
        Hot: "warning",
        Filed: "warning",
        New: "Paid",
        STABLE: "Submitted",
        Updated: "info",
        ACTIVE: "info",
    };
  return map[badge] || badge;
};


  return (
    <div className="scard p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <a 
          class="w-14 h-14 p-1 rounded-md flex items-center justify-center border border-gray-100 overflow-hidden cursor-pointer" 
          href="/unlisted-shares/undefined-49">
          <img width="56" height="56" class="object-cover" src={company.logo_url || "/images/stocks/nse.png"} />
          </a>
          <div>
            <div className="font-semibold text-primary-900 text-sm">{company.name}</div>
            <div className="text-primary-400 text-xs">{company.sector}</div>
          </div>
        </div>

        {company.tag && (
        <StatusTag className="rounded-full" variant={getVariant(company.tag)}>
            {company.tag}
        </StatusTag>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-primary-50 rounded-xl p-3">
          <div className="text-xs text-primary-400 mb-1">Pre-IPO Price</div>
          <div className="font-serif font-bold text-primary-800 text-lg">
            {company.price}
          </div>
        </div>

        <div className="bg-secondary-50 rounded-xl p-3">
          <div className="text-xs text-secondary-600 mb-1">
            Est. IPO Band
          </div>
          <div className="font-serif font-bold text-secondary-700 text-lg">
            {company.ipo}
          </div>
        </div>
      </div>


      {/* Meta */}

      <div className="flex items-center justify-between text-xs text-primary-500 mb-4">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          DRHP: {company.drhp}
        </span>
        <span className="flex items-center gap-1">
          <IndianRupee size={12} />
          Min {company.min}
        </span>

      </div>
      <div className="flex items-center gap-2 mb-4">
        <StatusTag className="rounded-full" variant="Submitted">DRHP Filed</StatusTag>
        <span className="text-xs text-primary-400">{company.status}</span>
      </div>


      {/* Subscription */}

      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-primary-500">Subscription</span>
        <span className="font-semibold text-secondary-600">
          {company.sub ? `${company.sub}%` : "NA"}
        </span>
      </div>

      <div className="w-full bg-primary-100 rounded-full h-1.5 mb-5">
        <div className="gain-bar h-1.5 rounded-full" style={{ width: `${company.sub}%` }}/>
      </div>

      <Button
        variant="secondary"
        size="lg"
        className="w-full flex items-center justify-center gap-2"
        onClick={onInterest}
      >
        <Rocket size={14} />
        Express Interest
      </Button>

    </div>
  );
}