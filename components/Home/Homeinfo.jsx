import React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

const Homeinfo = () => {
  return (
    <>
        
         <section className="pt-10 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 ">
            <div className="bg-white py-8 px-3 rounded-2xl shadow-md border border-gray-100 text-center">
                <AnimatedCounter end={100} prefix="₹" suffix="Cr+" label="Assets Under Advisory" />
            </div>
            <div className="bg-white py-8 px-3 rounded-2xl shadow-md border border-gray-100 text-center">
                <AnimatedCounter end={500} label="Satisfied Investors" />
            </div>
            <div className="bg-white py-8 px-3 rounded-2xl shadow-md border border-gray-100 text-center">
                <AnimatedCounter end={15} label="Years of Expertise" />
            </div>
            <div className="bg-white py-8 px-3 rounded-2xl shadow-md border border-gray-100 text-center">
                <AnimatedCounter end={8} suffix="%+" label="Average Fixed Income" />
            </div>
        </div>
        

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="">
                <img src="images/hm-abt.png" className="w-full rounded-2xl" alt="" />
            </div>
            <div className="">
                <h2 className="text-5xl font-semibold mb-6 font-primary">
                   <span className="text-secondary-300">Expertise</span> That Builds Enduring <span className="text-secondary-300">Wealth</span>
                </h2>
                <p className="leading-[30px] text-gray-700 font-primary mb-3">At Econexx Wealth, we specialize in sophisticated financial instruments designed to diversify and strengthen your portfolio. From stable corporate bonds to high-growth unlisted shares and strategic IPO guidance, we provide curated access backed by research, due diligence, and experienced advisory.</p>
                <p className="text-3xl font-semibold text-white leading-[40px] bg-primary-500 p-5 rounded-2xl">We don’t just offer Products <br/>We Offer Strategy.</p>
            </div>
            
        </div>
                
      </div>
     
    </section>
    </>
   
  );
};

export default Homeinfo;
