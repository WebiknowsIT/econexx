"use client";

import {
  TrendingUp,
  TrendingDown,
  Heart,
} from "lucide-react";

export default function ShareCard({
  s,
  view,
  watchlist,
  toggleWatch,
}) {
  const pos = s.return6m >= 0;
  const returnColor = pos ? "text-emerald-600" : "text-red-500";
  const isWatched = watchlist.includes(s.id);

  const cardBg = s.exclusive
    ? "bg-secondary-50 border-secondary-300"
    : "bg-white border-primary-100";

  const barClass = s.exclusive ? "grad-bar" : "bar-fill";

  /* -------------------- BADGE -------------------- */
  const Badge = () => {
    if (s.badge === "Exclusive") {
      return (
        <span className="inline-flex items-center gap-1 bg-secondary-100 text-secondary-800 text-xs px-2.5 py-0.5 rounded-full border border-secondary-200 badge-hot">
          ✦ Exclusive
        </span>
      );
    }

    if (s.badge === "Hot") {
      return (
        <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-xs px-2.5 py-0.5 rounded-full border border-red-100">
          🔥 Hot
        </span>
      );
    }

    if (s.badge === "New") {
      return (
        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs px-2.5 py-0.5 rounded-full border border-emerald-100">
          ✨ New
        </span>
      );
    }

    return null;
  };

  /* -------------------- STATUS -------------------- */
  const Status = () =>
    s.available ? (
      <span className="flex items-center gap-1 text-xs text-emerald-600">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
        Available
      </span>
    ) : (
      <span className="flex items-center gap-1 text-xs text-gray-400">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block"></span>
        Sold Out
      </span>
    );

  /* ========================================================= */
  /* ======================= LIST VIEW ======================= */
  /* ========================================================= */

  if (view === "list") {
    return (
      <div
        className={`share-card border rounded-2xl p-5 ${cardBg} flex flex-col sm:flex-row sm:items-center gap-4`}
      >
        {/* Left */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-serif text-xl font-bold text-primary-900">
              {s.name}
            </h3>
            <Badge />
          </div>

          <p className="text-primary-400 text-xs mb-1">
            {s.sector} · {s.stage}
          </p>

          <p className="text-primary-500 text-sm leading-relaxed line-clamp-1">
            {s.desc}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 shrink-0">
          {/* Price */}
          <div className="text-center">
            <div className="text-lg font-semibold text-primary-900">
              ₹{s.price.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">per share</div>
          </div>

          {/* Return */}
          <div className="text-center">
            <div className={`text-sm font-bold ${returnColor}`}>
              {pos ? "+" : ""}
              {s.return6m}%
            </div>
            <div className="text-xs text-gray-400">6M return</div>
          </div>

          {/* Demand */}
          <div className="text-center hidden sm:block">
            <div className="text-sm font-semibold text-primary-700">
              {s.demand}%
            </div>
            <div className="text-xs text-gray-400">demand</div>
          </div>

          <Status />

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => toggleWatch(s.id)}
              className={`watch-btn p-2 rounded-lg border border-primary-100 bg-white hover:border-secondary-300 ${
                isWatched ? "saved text-secondary-600" : ""
              }`}
              title="Watchlist"
            >
              <Heart
                className={`w-4 h-4 ${
                  isWatched
                    ? "fill-secondary-400 text-secondary-400"
                    : ""
                }`}
              />
            </button>

            <button className="flex items-center gap-1.5 bg-gradient-to-br from-primary-500 to-primary-700 text-white text-xs px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Invest
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================= */
  /* ======================= GRID VIEW ======================= */
  /* ========================================================= */

  return (
    <div
      className={`share-card border rounded-2xl p-6 ${cardBg} flex flex-col`}
    >
      {/* Top */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="inline-block bg-primary-100 text-primary-600 text-xs tracking-wider px-3 py-1 rounded-full mb-2">
            {s.sector}
          </span>

          {s.badge && (
            <div>
              <Badge />
            </div>
          )}
        </div>

        <button
          onClick={() => toggleWatch(s.id)}
          className={`watch-btn p-1.5 rounded-lg text-primary-300 hover:text-secondary-500 ${
            isWatched ? "saved" : ""
          }`}
          title="Add to watchlist"
        >
          <Heart
            className={`w-4 h-4 ${
              isWatched
                ? "fill-secondary-400 text-secondary-400"
                : ""
            }`}
          />
        </button>
      </div>

      {/* Title */}
      <h3 className="font-serif text-2xl font-bold text-primary-900 mb-0.5">
        {s.name}
      </h3>

      <p className="text-gray-400 text-xs mb-4">{s.stage}</p>

      <p className="text-primary-500 text-sm leading-relaxed mb-5 flex-1">
        {s.desc}
      </p>

      {/* Price + Return */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="text-xl font-semibold text-primary-900">
            ₹{s.price.toLocaleString()}
            <span className="text-xs font-normal text-gray-400 ml-1">
              / share
            </span>
          </div>

          <Status />
        </div>

        <div className="text-right">
          <div
            className={`flex items-center gap-1 justify-end ${returnColor} text-sm font-bold`}
          >
            {pos ? (
              <TrendingUp className="w-3.5 h-3.5" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5" />
            )}
            {pos ? "+" : ""}
            {s.return6m}%
          </div>
          <div className="text-xs text-gray-400">6M</div>
        </div>
      </div>

      {/* Demand */}
      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
        <span>Demand</span>
        <span className="font-medium text-primary-600">
          {s.demand}%
        </span>
      </div>

      <div
        className={`h-1.5 rounded-full overflow-hidden mb-5 ${
          s.exclusive ? "bg-secondary-200" : "bg-primary-100"
        }`}
      >
        <div
          className={`${barClass} h-full rounded-full`}
          style={{ width: `${s.demand}%` }}
        />
      </div>

      <button className="w-full bg-gradient-to-br from-primary-500 to-primary-700 text-white text-sm py-3 rounded-xl hover:opacity-90 transition-opacity font-medium">
        Invest Now
      </button>
    </div>
  );
}