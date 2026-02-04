import Image from "next/image";
import {formatAmount} from '@/utils/helper';
import Link from "next/link";

export default function StockCard({
  title,
  category,
  price,
  change,
  duration,
  badge = "STABLE",
  logo = "/images/stocks/nse.png",
}) {
  return (
    <div className="StockCard group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all hover:border-primary-100">
      <div className="relative z-5">
      <div className="flex justify-between items-start mb-3">
        <Link href="/shares/arohan-financial-services-unlisted-shares" className="w-14 h-14 p-1 rounded-md flex items-center justify-center border border-gray-100 overflow-hidden cursor-pointer">
          <Image
            src={logo}
            alt={title}
            width={56}
            height={56}
            className="object-cover"
          />
        </Link>

        <span className="px-2 py-1 rounded bg-primary-50 text-primary-700 text-[10px] font-bold">
          {badge}
        </span>
      </div>

      <Link href="/shares/arohan-financial-services-unlisted-shares" className="font-bold text-sm text-gray-900 mb-1 group-hover:text-primary-600 transition-colors cursor-pointer">
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
