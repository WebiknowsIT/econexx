"use client";

import "@/styles/unlisted.css";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";

// import ShareCard from "./components/ShareCard";
// import SidebarFilters from "./components/SidebarFilters";
// import Toolbar from "./components/Toolbar";

import PageHeader from "@/components/PageHeaderDark";
import QuickFilterBar from "./components/QuickFilterBar";
import Input from "@/components/ui/Input/Input";
import Pagination from "@/components/Pagination";
import StockCard from "@/components/StockCard";

import {SHARES} from "../../../utils/data";


export default function UnlistedMarketplace() {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState([]);
  const [quickFilter, setQuickFilter] = useState("All");
  const [sortValue, setSortValue] = useState("default");
  const [watchlist, setWatchlist] = useState([]);

  

  const [filters, setFilters] = useState({
  search: "",
  sectors: [],
  stages: [],
  returnFilter: "all",
  exclusive: false,
  available: false,
});

const toggleWatch = (id) => {
setWatchlist((prev) =>
    prev.includes(id)
    ? prev.filter((item) => item !== id)
    : [...prev, id]
);
};

const clearFilters = () => {
  setFilters({
    search: "",
    sectors: [],
    stages: [],
    returnFilter: "all",
    exclusive: false,
    available: false,
  });
};

  const filteredShares = useMemo(() => {
    let result = [...SHARES];

    if (search) {
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.sector.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sector.length > 0) {
      result = result.filter((s) => sector.includes(s.sector));
    }

    if (sortValue === "price-asc")
      result.sort((a, b) => a.price - b.price);

    if (sortValue === "price-desc")
      result.sort((a, b) => b.price - a.price);

    if (sortValue === "return-desc")
      result.sort((a, b) => b.return6m - a.return6m);

    return result;
  }, [search, sector, sortValue]);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;
  const start = (currentPage - 1) * perPage;
  const pageItems = filteredShares.slice(start, start + perPage);

  return (
    <>
      <PageHeader
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Unlisted Shares" },
        ]}
        tag="Marketplace"
        title="Unlisted"
        highlight="Shares"
        description="Browse pre-IPO and unlisted opportunities across India’s fastest growing sectors."
        stats={[
          { value: "200+", label: "Companies" },
          { value: "12K+", label: "Investors" },
          { value: "₹480Cr", label: "Traded" },
        ]}
      />

      <QuickFilterBar
        active={quickFilter}
        onChange={(val) => {
          setQuickFilter(val);
          setCurrentPage(1);
        }}
      />

      <div className="max-w-7xl bg-white mx-auto px-6 lg:px-16 py-8 flex gap-8">

        {/* Sidebar */}
        {/* <SidebarFilters
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
        /> */}

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between gap-4 pb-4 ">
            <p className="text-sm">
              <span className="font-semibold">
                {filteredShares.length}
              </span>{" "}companies found
            </p>
            <div className="">
              <Input
                type="text"
                placeholder="Company name..."
                value={filters.search}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    search: e.target.value,
                  }))
                }
                className="!pr-8"
                icon={<Search size={16} />}
              />
            </div>


          </div>
            {/* <Toolbar
                totalCount={filteredShares.length}
                sortValue={sortValue}
                setSortValue={setSortValue}
                view={view}
                setView={setView}
                onOpenDrawer={() => setIsDrawerOpen(true)}
            /> */}

          <div className={`grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-6`}>
            {pageItems.map((share) => (
              <StockCard
                id={share.id}
                title={share.name}
                category={share.sector}
                price= {share.price}
                change= "+1.3%"
                duration= "15D"
                badge= {share.badge}
                logo= "/images/stocks/nse.png"
              />
            ))}
          </div>

          <Pagination
            totalItems={filteredShares.length}
            perPage={perPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

        </div>
      </div>
    </>
  );
}