// components/detail/DetailHero.jsx
import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";
import {formatAmount} from "@/utils/helper";


export default function DetailHero({ data }) {
 
//console.log("share_name", data);
  
const tagStyles = [
  "bg-blue-500/20 border-blue-400 text-blue-300",
  "bg-green-500/20 border-green-400 text-green-300",
  "bg-pink-500/20 border-pink-400 text-pink-300",
  "bg-yellow-500/20 border-yellow-400 text-yellow-300",
  "bg-purple-500/20 border-purple-400 text-purple-300",
];

  return (
    <div className="bg-primary-900 py-10 px-6 lg:px-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% 110%,rgba(122,61,154,.35) 0%,transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        <nav className="flex items-center gap-2 text-primary-400 text-xs mb-6">
          <a href="/" className="hover:text-primary-200 transition-colors">Home</a>
          <span className="text-primary-600">›</span>
          <a href="/unlisted-shares/list" className="hover:text-primary-200 transition-colors">
          Unlisted Shares
          </a>
          <span className="text-primary-600">›</span>
          <span className="text-primary-300">{data?.share?.name}</span>
        </nav>

        {/* Hero row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 border border-white bg-white p-1 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <img
                height={80}
                width={80}
                className="h-full w-full object-contain"
                src={data.company.logo_url ? data.company.logo_url : "/images/stocks/nse.png"}
                alt={data?.share?.name}
              />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="font-bold text-white text-4xl lg:text-4xl">{data?.share?.name}</h1>
                <div className="flex flex-wrap gap-2">
                  {data?.is_featured?.is_featured && (
                    <span className="text-xs bg-red-500/20 border border-red-400/30 text-red-300 px-3 py-1 rounded-full">
                      🔥 Hot
                    </span>
                  )}

                  {data?.tags &&
                    data.tags.split(",").map((tag, index) => {
                      const cleanTag = tag.trim();
                      const style = tagStyles[index % tagStyles.length];
                      return (
                        <span key={index} className={`text-xs px-3 py-1 rounded-full border ${style}`}>
                          {cleanTag}
                        </span>
                      );
                    })}
                </div>
              </div>
                <div className="text-primary-300 text-sm max-w-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: data?.content?.description_html }}
                  />
              
              <div className="flex items-center gap-4 mt-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-xs text-primary-400">
                  <MapPin className="w-4 h-4" /> {data.location || "NA"}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-primary-400">
                  <Calendar className="w-4 h-4" /> Founded {data?.share?.dates?.registration_date?.split("-")[0] || "NA"}
                </span>
                {/* <span className="flex items-center gap-1.5 text-xs text-primary-400">
                  <Users className="w-4 h-4" /> {data.employees || "NA"} employees
                </span> */}
                {data.share.is_available && (
                  <span className="flex items-center gap-1 text-xs text-secondary-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block animate-pulse" />
                    &nbsp;Available Now
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right — quick price pill */}

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-7 py-5 flex gap-8 shrink-0">
            {data.banner.items.map((item, index) => (
              <>
                {index !== 0 && <div className="w-px bg-white/10" />}
                <div key={item.index} className="text-center">
                  <div className="text-xs text-primary-400 uppercase tracking-widest mb-1">
                    {item.title}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {item.number}
                  </div>
                </div>
              </>
            ))}
          </div>



          
        </div>
      </div>
    </div>
  );
}
