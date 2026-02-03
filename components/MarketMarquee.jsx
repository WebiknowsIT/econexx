export default function MarketMarquee() {
  return (
    <section className="border-y border-white/10 bg-primary/5 py-4 overflow-hidden">
      <div className="relative">
        <div className="flex w-max gap-12 items-center animate-marquee whitespace-nowrap">

          {/* ITEM */}
          <MarqueeItem
            name="NSE India"
            price="₹1,950"
            change="+1.3%"
            positive
          />

          <MarqueeItem
            name="CSK Unlisted"
            price="₹206"
            change="-2.8%"
          />

          <MarqueeItem
            name="OYO Stays"
            price="₹27"
            change="-3.5%"
          />

          <MarqueeItem
            name="HDB Finance"
            price="₹1,120"
            change="+0.8%"
            positive
          />

          <MarqueeItem
            name="Swiggy Pre-IPO"
            price="₹455"
            change="+2.1%"
            positive
          />

          {/* DUPLICATE FOR SEAMLESS LOOP */}
          <MarqueeItem
            name="NSE India"
            price="₹1,950"
            change="+1.3%"
            positive
          />

          <MarqueeItem
            name="CSK Unlisted"
            price="₹206"
            change="-2.8%"
          />

        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Reusable item */
/* ---------------------------------- */

function MarqueeItem({ name, price, change, positive }) {
  return (
    <div className="flex gap-4 items-center">
      <span className="text-gray-500 text-xs font-bold uppercase">
        {name}
      </span>

      <span
        className={
          positive ? "text-primary-400" : "text-rose-400"
        }
      >
        {price}
      </span>

      <span
        className={`text-[10px] ${
          positive
            ? "text-primary-500/60"
            : "text-rose-500/60"
        }`}
      >
        {change}
      </span>
    </div>
  );
}
