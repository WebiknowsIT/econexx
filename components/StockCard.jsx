import Image from "next/image";
import {formatAmount} from '@/utils/helper';
import Link from "next/link";
import StatusTag from "@/components/ui/StatusTag/StatusTag";

export default function StockCard({
  id,
  title,
  category,
  price,
  change,
  duration,
  badge = "STABLE",
  logo = "/images/stocks/nse.png",
}) {


  const getVariant = (badge) => {
  const map = {
    Exclusive: "Submitted",
    Hot: "warning",
    New: "Paid",
    STABLE: "Submitted",
    ACTIVE: "info",
  };
  return map[badge] || badge;
};

const slug = `${title?.toLowerCase().replace(/\s+/g, "-")}-${id}`;


  return (
    <div className="StockCard group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all hover:border-primary-100">
      <div className="relative z-5">
      <div className="flex justify-between items-start mb-3">
        <Link href={`/unlisted-shares/${slug}`} className="w-14 h-14 p-1 rounded-md flex items-center justify-center border border-gray-100 overflow-hidden cursor-pointer">
          <img
            src={logo && logo !== "null" && logo !== undefined? logo : "/images/stocks/nse.png"}
            alt={title}
            width={56}
            height={56}
            className="object-cover"
            onError={(e) => {e.currentTarget.src = "/images/stocks/nse.png"}}
          />
        </Link>

        {badge && (
          <StatusTag className="rounded-full" variant={getVariant(badge)}>{badge}</StatusTag>
        )}
      </div>

      <Link 
        href={`/unlisted-shares/${slug}`} 
        className="font-bold text-sm text-gray-900 mb-1 group-hover:text-primary-600 transition-colors cursor-pointer">
        {title}
      </Link>

      <p className="text-sm text-gray-400 mb-3">{category}</p>

      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold text-gray-900">{formatAmount(price)}</span>
        <span
            className={`text-sm font-medium ${change?.includes("-") ? "text-red-500" : "text-primary-600"
                }`}
        >
            {change}
        </span>
        <span className={`text-sm font-medium ${change?.includes("-") ? "text-red-500" : "text-primary-600"
                }`}>
          {duration}
        </span>
      </div>
      </div>
    </div>
  );
}
