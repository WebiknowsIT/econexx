export default function Fundamentals({ title = "Fundamentals", data = [] }) {
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
        {data.map((item, index) => (
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
