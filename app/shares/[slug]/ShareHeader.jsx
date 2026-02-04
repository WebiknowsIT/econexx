import { formatAmount } from "../../../utils/helper"

const share = {
  "name": "Arohan Financial Services",
  "slug": "arohan-financial-services-unlisted-shares",
  "price": 245,
  "change": -1.2,
  "logo": "../images/stocks/ags_transact.jpg"
}

export default function ShareHeader() {
    return (
        <div className="">
            <div className="flex items-center gap-4">
                <img src={share.logo} className="w-12 h-12 rounded-md" />
                <div>
                    <h1 className="text-xl font-semibold">{share.name}</h1>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-6">
                <div className="text-xl font-bold">{formatAmount(share.price)}</div>
                <div
                    className={`text-sm font-medium ${share.change < 0 ? "text-red-500" : "text-green-600"
                        }`}
                >
                    {share.change} ({share.changePercent}%)
                </div>
            </div>
        </div>
    )
}