"use client";

import AnimatedSection from "@/components/AnimatedSection";

const shares = [
  { name: "Razorpay", sector: "FinTech", price: "₹1,240", change: "+18%" },
  { name: "Ola Electric", sector: "EV", price: "₹86", change: "+31%" },
  { name: "PhysicsWallah", sector: "Edtech", price: "₹58", change: "+24%" },
  { name: "Boat", sector: "D2C", price: "₹1,070", change: "-3%" },
];

export default function Shares() {
  return (
    <section id="shares">
      <AnimatedSection>
        <h2 className="section-title">Featured Shares</h2>
      </AnimatedSection>

      <div className="shares-grid">
        {shares.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="share-card">
              <div className="card-tag">{item.sector}</div>
              <h3>{item.name}</h3>
              <div className="card-price">{item.price}</div>
              <div className="card-change">{item.change}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}