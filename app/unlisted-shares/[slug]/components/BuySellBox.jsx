// components/detail/BuySellBox.jsx
import { ArrowDownCircle, ArrowUpCircle, Clock, Headphones, ShieldCheck, Tag, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";
import { formatAmount } from "@/utils/helper";

export default function BuySellBox({ share }) {
  const [mode,       setMode]       = useState("buy");
  const [priceType,  setPriceType]  = useState("market");

  // ✅ ONLY FIX: correct API path
  const buyPrice = parseFloat(share?.share?.prices?.buy);
  const sellPrice = parseFloat(share?.share?.prices?.sell);
  const currentPrice = parseFloat(share?.share?.prices?.current);

  const lotSize = Number(share?.share?.lot?.min_qty) || share.lotSize || 1;

  const [qty, setQty] = useState(lotSize);
  const [limitPrice, setLimitPrice] = useState(currentPrice || buyPrice || sellPrice || 0);
  const [inWatch, setInWatch] = useState(false);

  const isBuy = mode === "buy";

  // ✅ ONLY FIX: correct price logic
  const unitPrice =
    !isBuy && priceType === "limit"
      ? limitPrice
      : isBuy
      ? (buyPrice || currentPrice || 0)
      : (sellPrice || currentPrice || 0);

  const subtotal  = qty * unitPrice;
  const feeRate   = isBuy ? 0.005 : 0.0075;
  const fee       = Math.round(subtotal * feeRate);
  const total     = isBuy ? subtotal + fee : subtotal - fee;

  const changeQty = (d) => {
    setQty((v) => Math.max(lotSize, v + d * lotSize));
  };

  return (
    <div className="">
      <div className="sticky top-28 rounded-2xl overflow-hidden border border-primary-100">
        <div
          className="relative px-6 py-5 overflow-hidden"
          style={{ background: "linear-gradient(135deg,#3E1C5C 0%,#220F34 60%,#6F3E0E 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle at 80% 20%,#F9A24F 0%,transparent 55%)" }}
          />
          <div className="relative z-10">

            {/* ✅ ONLY FIX: price display */}
            <div className="flex items-end gap-3 mb-1">
              <div className="text-3xl font-bold text-white">
                {formatAmount(
                  isBuy
                    ? (buyPrice || currentPrice || 0)
                    : (sellPrice || currentPrice || 0)
                )}
              </div>
              <div className="text-secondary-300 text-sm mb-1 font-medium">/ share</div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-primary-400 text-xs">
               {share.company.sector}
              </span>
              {share.share.is_available && (
                <span className="flex items-center gap-1 text-xs text-secondary-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block animate-pulse" />
                  &nbsp;Available
                </span>
              )}
            </div>

            {/* Buy / Sell toggle */}
            <div className="mt-4 flex bg-primary-900/60 rounded-xl p-1 border border-primary-700/40">
              <button
                onClick={() => setMode("buy")}
                className={[
                  "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border-0",
                  isBuy
                    ? "bg-white text-primary-900 shadow-sm"
                    : "bg-transparent text-primary-400",
                ].join(" ")}
              >
                <ArrowDownCircle className="w-4" /> Buy
              </button>
              <button
                onClick={() => setMode("sell")}
                className={[
                  "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border-0",
                  !isBuy
                    ? "bg-secondary-400 text-white shadow-sm"
                    : "bg-transparent text-primary-400",
                ].join(" ")}
              >
                <ArrowUpCircle className="w-4" /> Sell
              </button>
            </div>
          </div>
        </div>

        {/* FORM (UNCHANGED) */}
        <div className="bg-white p-6 space-y-5">
          {/* Quantity */}
          <div>
            <label className="block text-xs text-primary-400 tracking-widest uppercase mb-2">
              Quantity
            </label>
            <div
              className={`flex items-center border rounded-xl overflow-hidden bg-primary-50 ${
                isBuy ? "border-primary-200" : "border-secondary-300"
              }`}
            >
              <button
                onClick={() => changeQty(-1)}
                className="w-11 h-11 flex items-center justify-center text-primary-600 text-lg font-bold cursor-pointer border-0 bg-transparent hover:bg-primary-100 transition-colors"
              >
                −
              </button>
              <input
                type="number"
                value={qty}
                min={lotSize}
                step={lotSize}
                onChange={(e) => {
                  const v = Math.max(
                    lotSize,
                    Math.round(Number(e.target.value) / lotSize) * lotSize
                  );
                  setQty(v);
                }}
                className="flex-1 text-center text-primary-900 font-bold text-sm py-2 outline-none border-0 bg-transparent"
              />
              <button
                onClick={() => changeQty(1)}
                className="w-11 h-11 flex items-center justify-center text-primary-600 text-lg font-bold cursor-pointer border-0 bg-transparent hover:bg-primary-100 transition-colors"
              >
                +
              </button>
            </div>
            <p className="text-xs mt-1.5 text-slate-500">
              Min. {lotSize} shares · multiples of {lotSize}
            </p>
          </div>

          {/* Order summary */}
          <div className="rounded-xl overflow-hidden border border-primary-100">
            <div className="bg-primary-50 px-4 py-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span>{isBuy ? "Subtotal" : "Listing Value"}</span>
                <span>{formatAmount(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>
                  {isBuy ? "Platform fee (0.5%)" : "Seller fee (0.75%)"}
                </span>
                <span>{formatAmount(fee)}</span>
              </div>
            </div>
            <div className={`border-t px-4 py-3 flex justify-between items-center ${
              isBuy ? "bg-secondary-50 border-secondary-100" : "bg-secondary-100 border-secondary-200"
            }`}>
              <span className="font-semibold text-primary-900 text-sm">
                {isBuy ? "Total Payable" : "You Receive"}
              </span>
              <span className="font-bold text-primary-900 text-lg">{formatAmount(total)}</span>
            </div>
          </div>

          {/* ✅ CTA BUTTON (UNCHANGED — WILL SHOW) */}
          <button
            className="w-full py-4 rounded-xl font-bold text-sm text-white transition-all border-0 cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:opacity-90"
            style={{
              background: isBuy
                ? "linear-gradient(135deg,#7A3D9A,#3E1C5C)"
                : "linear-gradient(135deg,#F9A24F,#C47222)",
            }}
          >
            {isBuy ? 
              (<><Zap className="w-4" /> Invest Now</>) : (<><Tag className="w-4" /> Sale</>)
            }
          </button>

          {/* Trust signals */}
          <div className="space-y-1 border-t border-primary-100 pt-4">
            <div className="flex items-center gap-2 text-xs">
              <ShieldCheck className="w-4 text-emerald-500" />
              SEBI compliant off-market transfer
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Clock className="w-4 text-secondary-500" />
              Settlement in 2–3 business days
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Headphones className="w-4 text-primary-400" />
              Dedicated relationship manager
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}