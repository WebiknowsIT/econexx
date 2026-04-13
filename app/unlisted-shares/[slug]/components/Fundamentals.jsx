export default function Fundamentals({ title = "Fundamentals", data = {} }) {

  const formattedData = data
    ? Object.entries(data).map(([key, value]) => {
        
        const label = key
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

        // Format value
        let formattedValue = value;

        if (value === null || value === undefined || value === "") {
          formattedValue = "N/A";
        } else if (
          key.includes("ratio") ||
          key === "roe" ||
          key.includes("yield")
        ) {
          formattedValue = `${value}%`;
        } else if (key === "market_cap") {
          formattedValue = `${value} Cr`;
        } else if (key === "total_shares") {
          formattedValue = Number(value).toLocaleString();
        }

        return {
          label,
          value: formattedValue,
          negative: Number(value) < 0,
        };
      })
    : [];

  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h2 className="text-xl font-semibold mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
        {formattedData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-100 py-2"
          >
            <span className="text-sm text-gray-600">
              {item.label}
            </span>

            <span
              className={`text-sm font-medium text-right
                ${
                  item.value === "N/A"
                    ? "text-gray-400"
                    : item.negative
                    ? "text-red-600"
                    : "text-gray-900"
                }
              `}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}