import Image from "next/image";
import Link from "next/link";

export default function BondCard({
  title,
  minInvestment,
  ytm,
  maturityLeft,
  badge = "AAA",
  logo = "/images/stocks/nse.png",
  href = "/corporate-bonds",
}) {
  return (
    <Link href={href} className="BondCard group rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all hover:border-secondary-100 overflow-hidden block cursor-pointer relative">
      {/* Top Section with Beige/Cream Background */}
      <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 p-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 p-2 rounded-md flex items-center justify-center bg-white border border-gray-100 overflow-hidden">
            <Image
              src={logo}
              alt={title}
              width={56}
              height={56}
              className="object-contain"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-secondary-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600">Min. ₹{minInvestment}</p>
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background */}
      <div className="p-6 bg-white">
        <div className="grid grid-cols-2 gap-4">
          {/* YTM */}
          <div>
            <p className="text-xs text-gray-500 mb-1">YTM</p>
            <p className="text-2xl font-bold text-gray-900">{ytm}</p>
          </div>

          {/* Maturity Left */}
          <div className="text-right">
            <p className="text-xs text-gray-500 mb-1">Maturity left</p>
            <p className="text-lg font-semibold text-gray-900">{maturityLeft}</p>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="flex justify-end mt-4">
          <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-secondary-200 flex items-center justify-center transition-colors">
            <svg
              className="w-4 h-4 text-gray-600 group-hover:text-secondary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Badge - Positioned Absolutely */}
      <div className="absolute top-4 right-4">
        <span className="px-2 py-1 rounded bg-secondary-500 text-white text-[10px] font-bold">
          {badge}
        </span>
      </div>
    </Link>
  );
}
