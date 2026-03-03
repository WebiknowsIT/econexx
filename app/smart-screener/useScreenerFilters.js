import { useState } from "react";

const DEFAULT_FILTERS = {
  marketCap: { min: "0", max: "100" },
  pe: { min: "", max: "" },
  pb: { min: "", max: "" },
  roce: { min: "", max: "" },
};

const DEFAULT_VISIBLE = {
  marketCap: true,
  pe: true,
  pb: true,
  roce: true,
};

export function useScreenerFilters() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [visibleFilters, setVisibleFilters] = useState(DEFAULT_VISIBLE);
  const [activeFilters, setActiveFilters] = useState([{key: "marketCap",label: "Market Cap: 0 to 100",},]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const applyFilters = () => {
    const applied = [];

    Object.entries(filters).forEach(([key, val]) => {
      if (
        visibleFilters[key] &&
        (val.min !== "" || val.max !== "")
      ) {
        applied.push({
          key,
          label: `${key.toUpperCase()}: ${val.min || 0} to ${val.max || "∞"}`,
        });
      }
    });

    setActiveFilters(applied);
  };

  const removeRangeFilter = (key) => {
    setVisibleFilters((prev) => ({
      ...prev,
      [key]: false,
    }));

    setFilters((prev) => ({
      ...prev,
      [key]: { min: "", max: "" },
    }));

    setActiveFilters((prev) =>
      prev.filter((f) => f.key !== key)
    );
  };

  const addExtraFilter = (key, label) => {
    setVisibleFilters((prev) => ({
      ...prev,
      [key]: true,
    }));

    setActiveFilters((prev) => {
      if (prev.find((f) => f.key === key)) return prev;
      return [...prev, { key, label }];
    });
  };

  const applyPreset = (preset) => {
  // reset first (SAFE)
  setFilters(DEFAULT_FILTERS);
  setVisibleFilters(DEFAULT_VISIBLE);
  setActiveFilters([]);
  setDrawerOpen(false);

  const newFilters = {};
  const newVisible = { ...DEFAULT_VISIBLE };
  const newActive = [];

  Object.entries(preset.filters).forEach(([key, value]) => {
    newFilters[key] = {
      min: value.min ?? "",
      max: value.max ?? "",
    };

    newVisible[key] = true;

    newActive.push({
      key,
      label: `${key.toUpperCase()}: ${
        value.min !== undefined ? `> ${value.min}` : ""
      } ${
        value.max !== undefined ? `< ${value.max}` : ""
      }`,
    });
  });

  setFilters((prev) => ({ ...prev, ...newFilters }));
  setVisibleFilters(newVisible);
  setActiveFilters(newActive);
};

  // 🔥 RESET LOGIC
  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setVisibleFilters(DEFAULT_VISIBLE);
    setActiveFilters([]);
    setDrawerOpen(false);
  };

  return {
    filters,
    visibleFilters,
    activeFilters,
    drawerOpen,
    setDrawerOpen,
    updateFilter,
    applyFilters,
    addExtraFilter,
    removeRangeFilter,
    resetFilters,
    applyPreset,
  };
}
