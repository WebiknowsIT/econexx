'use client';

import {useSelector } from "react-redux";

import Tabs from "@/components/ui/Tabs/Tabs";
import FinancialTable from "@/components/FinancialTable";

export default function FinancialsSection() {

  const { unlistedShareDetails, detailsStatus } = useSelector((state) => state.unlistedShares);

  function IncomeStatement() {

  const incomeData = unlistedShareDetails?.income_statements || {};
  const years = Object.keys(incomeData); 
  const format = (num) => {
    if (num === null || num === undefined) return "-";
    return Number(num).toFixed(2);
  };

  const rows = [
  {
    label: "Revenue", 
    values: years.map((year) => format(incomeData[year]?.revenue)),
  },
  {
    label: "Cost of Material Consumed",
    values: years.map((year) =>
      format(incomeData[year]?.cost_of_material_consumed)
    ),
  },
  {
    label: "Gross Margin",
    values: years.map((year) =>
      format(incomeData[year]?.gross_margin)
    ),
  },
  {
    label: "EBITDA",
    values: years.map((year) =>
      format(incomeData[year]?.ebitda)
    ),
  },
  {
    label: "PBT",
    values: years.map((year) =>
      format(incomeData[year]?.pbt)
    ),
  },
  {
    label: "PAT",
    values: years.map((year) =>
      format(incomeData[year]?.pat)
    ),
  },
  {
    label: "EPS",
    values: years.map((year) =>
      format(incomeData[year]?.eps)
    ),
  },
];

  return (
    <div className="space-y-6">
      <FinancialTable
        title="P&L Statement"
        columns={["P&L Statement", ...years]}
        rows={rows}
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
  const cashFlowData = unlistedShareDetails?.cash_flows || {};
  const years = Object.keys(cashFlowData).sort();
  const format = (num) => {
    if (num === null || num === undefined) return "-";
    return Number(num).toFixed(2);
  };

  const rows = [
    {
      label: "Cash Flow From Operations",
      values: years.map((year) =>
        format(cashFlowData[year]?.cash_flow_from_operations)
      ),
    },
    {
      label: "Cash Flow From Investment",
      values: years.map((year) =>
        format(cashFlowData[year]?.cash_flow_from_investment)
      ),
    },
    {
      label: "Cash Flow From Financing",
      values: years.map((year) =>
        format(cashFlowData[year]?.cash_flow_from_financing)
      ),
    },
    {
      label: "Net Cash Generated",
      values: years.map((year) =>
        format(cashFlowData[year]?.net_cash_generated)
      ),
    },
    {
      label: "Cash at Start",
      values: years.map((year) =>
        format(cashFlowData[year]?.cash_at_start)
      ),
    },
    {
      label: "Cash at End",
      values: years.map((year) =>
        format(cashFlowData[year]?.cash_at_end)
      ),
    },
  ];

  return (
    <FinancialTable
      title="Cash Flow Statement"
      columns={["Cash Flow", ...years]}
      rows={rows}
    />
  );
}


  return (
      <div className="bg-white border border-primary-100 rounded-2xl p-7">
          <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                  Financials <span className="text-xs text-gray-400">(figures in ₹ cr)</span>
              </h2>
              {/* <div className="relative">
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
              </div> */}
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
