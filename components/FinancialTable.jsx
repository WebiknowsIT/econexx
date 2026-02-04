export default function FinancialTable({ title, columns = [], rows = [] }) {
  return (
    <div className="bg-white overflow-hidden">
      {title && (<div className="py-2 text-sm font-semibold">{title}</div>)}

      {/* Mobile scroll container */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-slate-200 rounded-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                {columns[0]}
              </th>
              {columns.slice(1).map((col) => (
                <th
                  key={col}
                  className="text-right px-4 py-3 font-medium text-gray-600"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-t border-slate-200 last:border-b hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {row.label}
                </td>

                {row.values.map((val, idx) => (
                  <td
                    key={idx}
                    className={`px-4 py-2 text-right whitespace-nowrap
                      ${
                        val < 0
                          ? "text-red-600"
                          : "text-gray-900"
                      }`}
                  >
                    {val === null ? "N/A" : val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
