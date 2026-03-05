// components/detail/SimilarShares.jsx

export default function SimilarShares({ similar }) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-16">
      <p className="text-secondary-600 text-xs tracking-[.18em] uppercase mb-3">
        — You May Also Like
      </p>
      <h2 className="font-serif font-bold text-3xl text-primary-900 mb-8">
        Similar Unlisted Shares
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {similar.map((s) => (
          <a
            key={s.name}
            href={`/shares/${s.name.toLowerCase().replace(/\s+/g, "-")}`}
            className={[
              "no-underline border rounded-2xl p-6 block transition-all",
              "hover:-translate-y-1 hover:shadow-lg",
              s.exclusive
                ? "border-secondary-200 bg-secondary-50 hover:border-secondary-400"
                : "border-primary-100 bg-white hover:border-secondary-300",
            ].join(" ")}
          >
            <span
              className={`inline-block text-xs px-3 py-1 rounded-full mb-4 ${
                s.exclusive
                  ? "bg-secondary-100 text-secondary-700"
                  : "bg-primary-100 text-primary-600"
              }`}
            >
              {s.exclusive ? "✦ Exclusive" : s.sector}
            </span>
            <h3 className="font-serif text-xl font-bold text-primary-900 mb-1">{s.name}</h3>
            <p className="text-primary-400 text-xs mb-4">{s.stage}</p>
            <div className="text-lg font-bold text-secondary-700 mb-1">
              ₹{s.price.toLocaleString("en-IN")}{" "}
              <span className="text-xs font-normal text-primary-400">/ share</span>
            </div>
            <div className="flex items-center gap-1 text-secondary-600 font-semibold text-xs mb-4">
              📈 +{s.return6m}% (6M)
            </div>
            <div className={`h-1.5 rounded-full overflow-hidden ${s.exclusive ? "bg-secondary-200" : "bg-primary-100"}`}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${s.demand}%`,
                  background: "linear-gradient(90deg,#7A3D9A,#F9A24F)",
                }}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
