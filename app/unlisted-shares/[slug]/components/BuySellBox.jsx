// components/detail/BuySellBox.jsx
import { ArrowDownCircle, ArrowUpCircle, Clock, Headphones, ShieldCheck, Tag, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";
import { formatAmount } from "@/utils/helper";

export default function BuySellBox({ share }) {
  const [mode,       setMode]       = useState("buy");
  const [priceType,  setPriceType]  = useState("market");
  const [qty,        setQty]        = useState(share.lotSize);
  const [limitPrice, setLimitPrice] = useState(share.price);
  const [inWatch,    setInWatch]    = useState(false);

  const isBuy     = mode === "buy";
  const unitPrice = !isBuy && priceType === "limit" ? limitPrice : share.price;
  const subtotal  = qty * unitPrice;
  const feeRate   = isBuy ? 0.005 : 0.0075;
  const fee       = Math.round(subtotal * feeRate);
  const total     = isBuy ? subtotal + fee : subtotal - fee;

  const changeQty = (d) => {
    setQty((v) => Math.max(share.lotSize, v + d * share.lotSize));
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
            {/* <div className="flex items-center justify-between mb-3">
              <span className="text-primary-300 text-xs tracking-[.15em] uppercase font-medium">
                Current Price
              </span>
              <span className="flex items-center gap-1 text-xs font-semibold text-secondary-300 bg-secondary-400/15 border border-secondary-400/25 px-2 py-0.5 rounded-full">
                <TrendingUp className="w-4" /> +{share.return6m}% (6M)
              </span>
            </div> */}
            <div className="flex items-end gap-3 mb-1">
              <div className="text-3xl font-bold text-white">{formatAmount(share.price)}</div>
              <div className="text-secondary-300 text-sm mb-1 font-medium">/ share</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary-400 text-xs">
                {share.stage} · {share.sector}
              </span>
              {share.available && (
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

        {/* Form body */}
        <div className="bg-white p-6 space-y-5">
          {/* <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: isBuy ? "#7A3D9A" : "#F9A24F" }}
            />
            <span
              className="text-xs font-semibold tracking-wide uppercase"
              style={{ color: isBuy ? "#3E1C5C" : "#C47222" }}
            >
              {isBuy ? "Buying Shares" : "Listing Shares for Sale"}
            </span>
          </div> */}

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
                min={share.lotSize}
                step={share.lotSize}
                onChange={(e) => {
                  const v = Math.max(
                    share.lotSize,
                    Math.round(Number(e.target.value) / share.lotSize) * share.lotSize
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
              Min. {share.lotSize} shares · multiples of {share.lotSize}
            </p>
          </div>

          {/* Sell-only: price type */}
          {!isBuy && (
            <div>
             {/* <label className="block text-xs text-primary-400 tracking-widest uppercase mb-2">
                Listing Price
              </label>
               <div className="flex gap-2">
                {["market", "limit"].map((pt) => (
                  <button
                    key={pt}
                    onClick={() => setPriceType(pt)}
                    className={[
                      "flex-1 text-xs py-2.5 rounded-xl border cursor-pointer transition-all",
                      priceType === pt
                        ? "border-secondary-400 bg-secondary-100 text-secondary-800 font-semibold"
                        : "border-primary-200 bg-white text-primary-500",
                    ].join(" ")}
                  >
                    {pt === "market" ? "Market Price" : "Set Limit"}
                  </button>
                ))}
              </div> */}
              {/* {priceType === "limit" && (
                <div className="relative mt-3">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400 text-sm font-medium">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={limitPrice}
                    onChange={(e) => setLimitPrice(Number(e.target.value))}
                    className="w-full pl-7 pr-3 py-2.5 text-sm border border-primary-200 rounded-xl outline-none focus:border-secondary-400 bg-primary-50 font-semibold text-primary-900 transition-colors"
                  />
                </div>
              )} */}
            </div>
          )}

          {/* Order summary */}
          <div className="rounded-xl overflow-hidden border border-primary-100">
            <div className="bg-primary-50 px-4 py-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">{isBuy ? "Subtotal" : "Listing Value"}</span>
                <span className="font-semibold text-primary-900">{formatAmount(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  {isBuy ? "Platform fee (0.5%)" : "Seller fee (0.75%)"}
                </span>
                <span className="font-semibold text-primary-900">{formatAmount(fee)}</span>
              </div>
            </div>
            <div
              className={`border-t px-4 py-3 flex justify-between items-center ${
                isBuy
                  ? "bg-secondary-50 border-secondary-100"
                  : "bg-secondary-100 border-secondary-200"
              }`}
            >
              <span className="font-semibold text-primary-900 text-sm">
                {isBuy ? "Total Payable" : "You Receive"}
              </span>
              <span className="font-bold text-primary-900 text-lg">{formatAmount(total)}</span>
            </div>
          </div>

          {/* CTA */}
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

          {/* Watchlist */}
          {/* <button
            onClick={() => setInWatch(!inWatch)}
            className="w-full py-3 rounded-xl text-sm font-medium cursor-pointer flex items-center justify-center gap-2 transition-all border"
            style={
              inWatch
                ? { background: "#FFF4E8", borderColor: "#F9A24F", color: "#C47222" }
                : { background: "white", borderColor: "#E6D9F0", color: "#7A3D9A" }
            }
          >
            {inWatch ? "❤️ Saved to Watchlist" : "🤍 Add to Watchlist"}
          </button> */}

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

      {/* ── Share Details card ────────────────────────────────── */}
      <div className="mt-4 bg-white border border-primary-100 rounded-2xl overflow-hidden">
        <div className="bg-primary-50 border-b border-primary-100 px-5 py-3 flex items-center gap-2">
          <span className="text-primary-400 text-sm">ℹ️</span>
          <h4 className="font-semibold text-primary-900 text-sm">Share Details</h4>
        </div>
        <div className="p-5 space-y-2.5 text-xs">
          {[
            { label: "Security Type", value: "Equity Shares",    mono: false },
            { label: "Face Value",    value: share.faceValue,    mono: false },
            { label: "ISIN",          value: share.isin,         mono: true  },
            { label: "Depository",    value: share.depository,   mono: false },
            { label: "Lot Size",      value: `${share.lotSize} shares`, mono: false },
          ].map(({ label, value, mono }) => (
            <div key={label} className="flex justify-between">
              <span className="text-primary-400">{label}</span>
              <span className={`font-medium text-primary-800 ${mono ? "font-mono text-[11px]" : ""}`}>
                {value}
              </span>
            </div>
          ))}
          <div className="flex justify-between">
            <span className="text-primary-400">Last Updated</span>
            <span className="flex items-center gap-1 font-medium text-secondary-600">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block" />
              {share.lastUpdated}
            </span>
          </div>
        </div>
      </div>

      {/* ── Contact nudge ─────────────────────────────────────── */}
      <div className="mt-4 rounded-2xl overflow-hidden border border-secondary-200">
        <div className="bg-secondary-50 px-5 py-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-secondary-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-lg">
            💬
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-secondary-800 mb-0.5">Need help deciding?</p>
            <p className="text-xs text-secondary-600 leading-relaxed">
              Talk to a relationship manager for a free 1-on-1 consultation.
            </p>
          </div>
        </div>
        <button
          className="w-full py-3 text-white text-xs font-semibold tracking-wide cursor-pointer border-0 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          style={{ background: "#F59F4A" }}
        >
          📞 Request a Call Back
        </button>
      </div>

    </div>
  );
}
