"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/ui/Button";

const shares = [
  {
    id: 1,
    name: "Tata Capital",
    slug: "tata-capital",
    sector: "NBFC",
    price: 980,
  },
  {
    id: 2,
    name: "OYO",
    slug: "oyo",
    sector: "Hospitality",
    price: 52,
  },
];

export default function AllSharesPage() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-primary-50 min-h-screen">
      <div className="max-w-7xl mx-auto">

        <AnimatedSection delay={0.1} y={40}>
          <h1 className="font-serif text-4xl font-bold text-primary-900 mb-8">
            All Unlisted Shares
          </h1>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shares.map((share) => (
            <div
              key={share.id}
              className="bg-white p-6 rounded-2xl border border-primary-100"
            >
              <h3 className="font-semibold text-primary-900 mb-2">
                {share.name}
              </h3>

              <p className="text-sm text-primary-400 mb-4">
                {share.sector}
              </p>

              <p className="font-semibold mb-4">
                ₹{share.price}
              </p>

              <Link href={`/unlisted-shares/${share.slug}`}>
                <Button variant="primary" className="text-sm px-4 py-2">
                  View Details
                </Button>
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}