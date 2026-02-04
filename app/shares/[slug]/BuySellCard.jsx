'use client';

import { useState } from "react";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button";
import { formatAmount } from "../../../utils/helper";
import Tabs from "../../../components/ui/Tabs/Tabs";

const share = {
  name: "Arohan Financial Services",
  slug: "arohan-financial-services-unlisted-shares",
  price: 245,
  change: -1.2,
};

const MIN_QTY = 100;
const STEP = 100;

export default function BuySellCard() {
  const [buyQty, setBuyQty] = useState("");
  const [sellQty, setSellQty] = useState("");
  const [sellMsg, setSellMsg] = useState("");

  const [buyError, setBuyError] = useState("");
  const [sellError, setSellError] = useState("");

  /* ---------- Validation helpers ---------- */
  const validateQty = (value, setError) => {
    if (value && value < MIN_QTY) {
      setError(`Minimum quantity is ${MIN_QTY}`);
    } else if (value && value % STEP !== 0) {
      setError(`Quantity must be in multiples of ${STEP}`);
    } else {
      setError("");
    }
  };

  /* ---------- Buy handlers ---------- */
  const handleBuyQtyChange = (e) => {
    const value = e.target.value;
    setBuyQty(value);
    validateQty(value, setBuyError);
  };

  /* ---------- Sell handlers ---------- */
  const handleSellQtyChange = (e) => {
    const value = e.target.value;
    setSellQty(value);
    validateQty(value, setSellError);
  };

  const renderBuyTab = () => (
    <div className="space-y-4">
      <div>
        <label className="text-md font-semibold">{share.name}</label>
        <div className="text-xs text-gray-600">
          {formatAmount(share.price)}
        </div>
      </div>

      <Input
        className="input-styled"
        label="Quantity"
        type="number"
        value={buyQty}
        onChange={handleBuyQtyChange}
        min={MIN_QTY}
        step={STEP}
        placeholder={`Buy Minimum ${MIN_QTY} quantity`}
        errorMessage={buyError}
        required
      />

      <div className="text-sm text-gray-500">
        Total Value:{" "}
        <span className="font-medium text-gray-900">
          ₹{buyQty ? buyQty * share.price : 0}
        </span>
      </div>

      <Button
        disabled={!!buyError || !buyQty}
        className={`mt-4 w-full py-2.5 rounded-md font-medium
          ${
            buyError || !buyQty
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-primary-600 text-white"
          }`}
        variant="primary"
      >
        Buy Now
      </Button>
    </div>
  );

  const renderSellTab = () => (
    <div className="space-y-4">
      <div>
        <label className="text-md font-semibold">{share.name}</label>
        <div className="text-xs text-gray-600">
          *Best in Industry
        </div>
      </div>

      <Input
        className="input-styled"
        label="Quantity"
        type="number"
        value={sellQty}
        onChange={handleSellQtyChange}
        min={MIN_QTY}
        step={STEP}
        placeholder={`Sell Minimum ${MIN_QTY} quantity`}
        errorMessage={sellError}
        required
      />

      {/* Message */}
      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea
          className="input-styled"
          placeholder="Your message"
          value={sellMsg}
          onChange={(e) => setSellMsg(e.target.value)}
          rows={3}
        />
      </div>

      {/* <div className="text-sm text-gray-500">
        Total Value:{" "}
        <span className="font-medium text-gray-900">
          ₹{sellQty ? sellQty * share.price : 0}
        </span>
      </div> */}

      <Button
        disabled={!!sellError || !sellQty}
        className={`mt-4 w-full py-2.5 rounded-md font-medium
          ${
            sellError || !sellQty
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-primary-600 text-white"
          }`}
        variant="primary"
      >
        Sell
      </Button>
    </div>
  );

  return (
    <div className="border border-slate-300 rounded-xl p-6">
      <Tabs
        tabListClassName="gap-4"
        defaultActiveKey="buy"
        items={[
          { key: "buy", label: "Buy", children: renderBuyTab() },
          { key: "sell", label: "Sell", children: renderSellTab() },
        ]}
      />
    </div>
  );
}
