'use client';

import {useSelector } from "react-redux";

import Tabs from "@/components/ui/Tabs/Tabs";
import FinancialTable from "@/components/FinancialTable";

export default function FinancialsSection() {

const { unlistedShareDetails, detailsStatus } = useSelector((state) => state.unlistedShares);

function IncomeStatement() {
  const financials = unlistedShareDetails?.financials || {};

  const pnlData = financials?.income_statement?.p_and_l_statement || [];
  const ratioData = financials?.income_statement?.financial_ratios || [];

  const format = (num) => {
    if (num === null || num === undefined) return "-";
    return Number(num).toFixed(2);
  };

  // ✅ reusable dynamic generator
  const generateRows = (data) => {
    if (!data || data.length === 0) return [];

    return Object.keys(data[0])
      .filter((key) => key !== "year")
      .map((key) => ({
        label: key
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        values: data.map((item) => format(item[key])),
      }));
  };

  const yearsPnl = pnlData.map((i) => i.year);
  const yearsRatio = ratioData.map((i) => i.year);

  return (
    <div className="space-y-6">

      {/* ✅ ONLY P&L */}
      <FinancialTable
        title="P&L Statement"
        columns={["P&L Statement", ...yearsPnl]}
        rows={generateRows(pnlData)}
      />

      {/* ✅ ONLY RATIOS (if exists) */}
      {ratioData.length > 0 && (
        <FinancialTable
          title="Financial Ratios"
          columns={["Ratios", ...yearsRatio]}
          rows={generateRows(ratioData)}
        />
      )}
    </div>
  );
}

function BalanceSheet() {
  const data = unlistedShareDetails?.financials?.balance_sheet?.combined || [];

  const years = data.map((item) => item.year);

  const format = (num) => {
    if (num === null || num === undefined) return "-";
    return Number(num).toFixed(2);
  };

  // ✅ Get keys dynamically
  const assetKeys =
    data.length > 0 ? Object.keys(data[0].assets || {}) : [];

  const liabilityKeys =
    data.length > 0 ? Object.keys(data[0].liabilities || {}) : [];

  // ✅ Build rows
  const assetRows = assetKeys.map((key) => ({
    label: key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    values: data.map((item) => format(item.assets?.[key])),
  }));

  const liabilityRows = liabilityKeys.map((key) => ({
    label: key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    values: data.map((item) => format(item.liabilities?.[key])),
  }));

  return (
    <div className="space-y-6">
      <FinancialTable
        title="Assets"
        columns={["Assets", ...years]}
        rows={assetRows}
      />

      <FinancialTable
        title="Liabilities"
        columns={["Liabilities", ...years]}
        rows={liabilityRows}
      />
    </div>
  );
}

function CashFlow() {
  const cashFlowData = unlistedShareDetails?.financials?.cash_flow?.cash_flow_statement || [];

  const years = cashFlowData.map((item) => item.year);

  const format = (num) => {
    if (num === null || num === undefined) return "-";
    return Number(num).toFixed(2);
  };

  const rows =
    cashFlowData.length > 0
      ? Object.keys(cashFlowData[0])
          .filter((key) => key !== "year")
          .map((key) => ({
            label: key
              .replace(/_/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase()),
            values: cashFlowData.map((item) =>
              format(item[key])
            ),
          }))
      : [];

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
