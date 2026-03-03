import { notFound } from "next/navigation";

const shares = [
  {
    slug: "tata-capital",
    name: "Tata Capital",
    sector: "NBFC",
    price: 980,
    description: "Tata Group’s leading financial services arm.",
  },
  {
    slug: "oyo",
    name: "OYO",
    sector: "Hospitality",
    price: 52,
    description: "Global hospitality tech platform.",
  },
];

export default function ShareDetailPage({ params }) {
  const share = shares.find((s) => s.slug === params.slug);

  if (!share) return notFound();

  return (
    <section className="px-6 lg:px-16 py-24 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">

        <h1 className="font-serif text-4xl font-bold text-primary-900 mb-4">
          {share.name}
        </h1>

        <p className="text-primary-400 mb-6">
          {share.sector}
        </p>

        <p className="text-lg font-semibold mb-6">
          ₹{share.price}
        </p>

        <p className="text-primary-600 leading-relaxed">
          {share.description}
        </p>

      </div>
    </section>
  );
}