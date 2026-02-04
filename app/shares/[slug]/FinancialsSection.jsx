'use client';

import Tabs from "@/components/ui/Tabs/Tabs";
import FinancialTable from "../../../components/FinancialTable";

function IncomeStatement() {
  return (
    <div className="space-y-6">
      <FinancialTable
        title="P&L Statement"
        columns={["P&L Statement", "2022", "2023", "2024"]}
        rows={[
          { label: "Revenue", values: [724, 736, 703] },
          { label: "Cost of Material Consumed", values: [664, 678, 663] },
          { label: "Gross Margins", values: [8.29, 7.88, 5.69] },
          { label: "EBITDA", values: [21, 25, 14] },
          { label: "PBT", values: [7, 5, -13] },
          { label: "PAT", values: [5, 3, -10] },
          { label: "EPS", values: [4.66, 2.8, -9.33] },
        ]}
      />

      <FinancialTable
        title="Financial Ratios"
        columns={["Ratios", "2022", "2023", "2024"]}
        rows={[
          { label: "Operating Profit Margin", values: [2.9, 3.4, 1.99] },
          { label: "Net Profit Margin", values: [0.69, 0.41, -1.42] },
          { label: "EPS (Diluted)", values: [4.66, 2.8, -9.33] },
        ]}
      />
    </div>
  );
}

function BalanceSheet() {
  return (
    <div className="space-y-6">
      <FinancialTable
        title="Assets"
        columns={["Assets", "2022", "2023", "2024"]}
        rows={[
          { label: "Fixed Assets", values: [22.4, 23, 25] },
          { label: "Inventory", values: [152, 166, 244] },
          { label: "Other Assets", values: [33.46, 17, 38] },
          { label: "Total Assets", values: [213, 217, 314] },
        ]}
      />

      <FinancialTable
        title="Liabilities"
        columns={["Liabilities", "2022", "2023", "2024"]}
        rows={[
          { label: "Share Capital", values: [10.72, 10.72, 10.72] },
          { label: "Borrowings", values: [139, 161, 134] },
          { label: "Trade Payables", values: [42, 19, 120] },
          { label: "Total Liabilities", values: [213, 217, 314] },
        ]}
      />
    </div>
  );
}

function CashFlow() {
  return (
    <FinancialTable
      title="Cash Flow Statement"
      columns={["Cash Flow", "2022", "2023", "2024"]}
      rows={[
        { label: "Cash Flow From Operations", values: [-11, -16, 60] },
        { label: "Cash Flow From Investment", values: [-3, -2, -3] },
        { label: "Cash Flow From Financing", values: [24, 2, -51] },
        { label: "Net Cash Generated", values: [10, -16, 6] },
        { label: "Cash at the End", values: [17, 1, 8] },
      ]}
    />
  );
}



export default function FinancialsSection() {
  return (
      <div className="">
          <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                  Financials <span className="text-xs text-gray-400">(figures in ₹ cr)</span>
              </h2>
              <div className="relative">
                  <select className="select-styled">
                      <option>Yearly</option>
                      <option>Quarterly</option>
                  </select>
                  <svg
                      className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                      <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                      />
                  </svg>
              </div>
          </div>

          <Tabs
              defaultActiveKey="income"
              tabListClassName="gap-6"
              contentClassName="pt-4"
              items={[
                  {
                      key: "income",
                      label: "Income Statement",
                      children: <IncomeStatement />,
                  },
                  {
                      key: "balance",
                      label: "Balance Sheet",
                      children: <BalanceSheet />,
                  },
                  {
                      key: "cashflow",
                      label: "Cash Flow",
                      children: <CashFlow />,
                  },
              ]}
          />
      </div>
  );
}
