import React from "react";

const DEFAULT_STATS = [
  { title: "Bonds sold", value: "₹50Cr+" },
  { title: "Average return", value: "9%+" },
  { title: "Satisfied Investors", value: "500+" },
  { title: "Years of Expertise", value: "15+" },
];

const Homeinfo = ({ items = [] }) => {
  const stats = items?.length ? items : DEFAULT_STATS;

  return (
    <section className="pt-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white py-8 px-3 rounded-2xl shadow-md border border-gray-100 text-center"
            >
              <div className="text-4xl md:text-5xl font-semibold text-primary-700 mb-2">
                {item.value}
              </div>
              <p className="text-gray-600 text-[1rem]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homeinfo;
