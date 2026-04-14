"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/store/action/blogActions";
import * as url from "@/utils/Url";

import { Bookmark, Calendar, Clock, Eye ,Flame, Mail, Send, Users, Tag } from "lucide-react";

import Button from "@/components/ui/Button";
import Pagination from "@/components/Pagination";
import AnimatedSection from "@/components/AnimatedSection";

export default function MediaCoverage() {

  const dispatch = useDispatch();

  const { blogs, pagination } = useSelector((state) => state.blog);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    dispatch(fetchBlogs(currentPage));
  }, [dispatch, currentPage]);

  const totalPages = pagination?.last_page || Math.ceil((blogs?.length || 0) / perPage);

  const sourceData = blogs && blogs.length > 0 ? blogs : [];

  const start = (currentPage - 1) * perPage;
  const pageItems = sourceData.slice(start, start + perPage);


function renderHero() {
  return (
    <section className="heroSection hero-glow gridBgDark noise bg-primary-900 py-10 px-6 lg:px-16 overflow-hidden">
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full border float"
        style={{ borderColor: "rgba(122,61,154,.1)" }}
      />
      <div
        className="absolute top-40 right-32 w-56 h-56 rounded-full border"
        style={{ borderColor: "rgba(182,138,204,.06)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border"
        style={{ borderColor: "rgba(122,61,154,.07)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <AnimatedSection delay={0.2} y={40}>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="inline-block font-semibold uppercase tracking-widest text-[.62rem] px-3 py-0.5 rounded-full text-primary-300"
                  style={{
                    background: "rgba(122,61,154,.18)",
                    border: "1px solid rgba(182,138,204,.22)"
                  }}
                >
                  Market Intelligence
                </span>

                <span
                  className="inline-block font-semibold uppercase tracking-widest text-[.62rem] px-3 py-0.5 rounded-full text-secondary-400"
                  style={{
                    background: "rgba(196,114,34,.12)",
                    border: "1px solid rgba(249,162,79,.22)"
                  }}
                >
                  Weekly Updated
                </span>

              </div>

              <h1 className="heroTitle font-bold leading-[1.05] mb-6 text-primary-50">
                Insights for Smarter <span className="gradBrand">Investment Decisions</span>
              </h1>

              <p className="text-primary-400 text-lg leading-relaxed max-w-lg mb-10">
                Deep analysis on unlisted equities, pre-IPO opportunities,
                and fixed income markets — written by practitioners,
                not journalists.
              </p>
            </div>
          </AnimatedSection>


          {/* STATS */}
          <AnimatedSection delay={0.35} y={40}>
            <div className="grid grid-cols-2 gap-4 pb-2">
              {[
                { num: "120+", label: "Articles Published" },
                { num: "24K+", label: "Monthly Readers" },
                { num: "Weekly", label: "Market Roundup" },
                { num: "8 min", label: "Avg. Read Time" }
              ].map((stat, i) => (

                <div
                  key={i}
                  className="p-5 rounded-[.875rem]"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(182,138,204,.1)"
                  }}
                >
                  <div className="text-3xl font-bold text-secondary-400 mb-1">
                    {stat.num}
                  </div>
                  <div className="text-primary-500 text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function renderArticles() {
  return (
    <section className="px-6 lg:px-16 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2">
            <div className="space-y-5">

              {pageItems.map((article, i) => {
                // ✅ Safe mapping (API + static fallback)
                const title = article.title;
                const image = article.featured_image
                  ? `${url.BASE_URL}/storage/${article.featured_image}`
                  : article.image;

                const date = article.created_at
                  ? new Date(article.created_at).toDateString()
                  : article.date;

                const views = article.view_count || article.views;
                const author = article.author_name || article.author;
                const excerpt = article.excerpt;

                return (
                  <AnimatedSection key={i} delay={0.15 + i * 0.1} y={40}>
                    <a
                      href={article.slug ? `/blogs/${article.slug}` : "#"}
                      className="no-underline block bg-white border border-primary-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(122,61,154,.1)]"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3">
                        <div className="sm:col-span-1 relative min-h-40">
                          <img
                            src={image || '/images/blog1.jpg'}
                            alt={title}
                            className="object-cover h-full w-full"
                            onError={(e) => {
                              e.target.src = '/images/blog1.jpg';
                            }}
                          />
                        </div>
                        <div className="sm:col-span-2 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="inline-block bg-primary-50 border border-primary-100 text-primary-500 font-semibold uppercase tracking-[.1em] text-[.6rem] px-2.5 py-0.5 rounded-full">
                              {article.category || "Blog"}
                            </span>

                            <span className="w-1 h-1 rounded-full bg-primary-200"></span>

                            <span className="flex items-center gap-1 text-primary-400 text-xs">
                              <Clock size={12} /> {article.read || "5 min"}
                            </span>

                            <span className="w-1 h-1 rounded-full bg-primary-200"></span>

                            <span className="flex items-center gap-1 text-primary-400 text-xs">
                              <Calendar size={12} /> {date}
                            </span>
                          </div>

                          <h3 className="font-bold text-primary-900 mb-2 text-xl">
                            {title}
                          </h3>

                          <p className="text-sm leading-relaxed mb-4 line-clamp-2">
                            {excerpt ||
                              "Dissecting financials and market trends..."}
                          </p>

                          <div className="flex justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 p-1 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-700 text-xs">
                                {author?.[0] || "A"}
                              </div>
                              <span className="text-primary-500 text-xs">
                                {author || "Admin"}
                              </span>
                            </div>

                            <div className="flex gap-3">
                              <span className="flex items-center gap-1">
                                <Eye size={12} />
                                {views || "0"}
                              </span>

                              <span className="flex items-center gap-1">
                                <Bookmark size={12} />
                                {article.like_count || "0"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </AnimatedSection>
                );
              })}

            </div>

            {/* PAGINATION */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>

          {/* RIGHT SIDEBAR (UNCHANGED) */}
          {renderRightSidebar()}

        </div>
      </div>
    </section>
  );
}

function renderRightSidebar () {
  return (
    <>
    {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1 space-y-6">
            <AnimatedSection>
              <div className="bg-white border border-primary-100 rounded-2xl p-6">

                <h3 className="font-serif font-bold text-primary-900 mb-4 flex items-center gap-2 text-lg">
                  <Flame size={16} className="text-secondary-500" />
                  Trending This Week
                </h3>

                <div>

                  {pageItems?.map((item, i) => (

                    <a
                      key={i}
                      href={item.slug ? `/blogs/${item.slug}` : "#"}
                      className="no-underline flex items-start gap-4 p-3 -mx-3 rounded-lg transition-colors hover:bg-primary-50 border-b border-primary-50 last:border-none"
                    >

                      <span className="font-serif font-bold text-3xl text-primary-100 leading-none mt-0.5 min-w-[2rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div>

                        <div className="text-sm font-semibold text-primary-800 leading-snug mb-1">
                          {item.title}
                        </div>

                        <div className="text-xs text-primary-400 flex items-center gap-1.5">
                          <Eye size={12} />
                          {item.view_count} reads
                        </div>

                      </div>

                    </a>

                  ))}

                </div>

              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div
                className="relative rounded-2xl overflow-hidden p-6"
                style={{background: "linear-gradient(135deg,#0D0812,#220F34)",
                  border: "1px solid rgba(182,138,204,.12)",
                }}
              >

                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle,rgba(122,61,154,.25),transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(249,162,79,.15)",
                      border: "1px solid rgba(249,162,79,.2)",
                    }}
                  >
                    <Mail size={18} className="text-secondary-400" />
                  </div>

                  <h3 className="font-serif font-bold text-primary-100 mb-2 text-lg">
                    Market Intelligence, Weekly
                  </h3>

                  <p className="text-primary-400 text-sm leading-relaxed mb-5">
                    Pre-IPO movers, bond yields, and one deep-dive — every Friday
                    morning.
                  </p>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl px-4 py-3 text-sm font-sans outline-none mb-3"
                    style={{
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(182,138,204,.2)",
                      color: "#E6D9F0",
                    }}
                  />

                  <Button size="lg" variant="secondary" className="w-full flex items-center justify-center gap-2">
                    <Send size={14} /> Subscribe Free
                  </Button>

                  <p className="text-white text-xs text-center mt-3 flex items-center justify-center gap-1">
                    <Users size={12} />
                    24,000+ subscribers
                  </p>

                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white border border-primary-100 rounded-2xl p-6">

                <h3 className="font-serif font-bold text-primary-900 mb-4 flex items-center gap-2 text-lg">
                  <Tag size={16} className="text-primary-500" />
                  Browse Topics
                </h3>

                <div className="flex flex-wrap gap-2">

                  {[
                    "Market Analysis",
                    "Pre-IPO",
                    "Bonds",
                    "Economy",
                    "Fintech",
                    "Edtech",
                    "Clean Energy",
                    "SEBI & Regulation",
                    "Deep Dives",
                  ].map((topic, i) => (

                    <a
                      key={i}
                      href="#"
                      className="no-underline bg-primary-50 border border-primary-100 text-primary-600 text-xs font-medium px-3 py-1.5 rounded-full transition-all hover:border-primary-300 hover:bg-primary-100"
                    >
                      {topic}
                    </a>

                  ))}

                </div>

              </div>
            </AnimatedSection>

          </div>
    </>
  )
}


  return (
    <div className="w-full text-gray-800">
      {renderHero()}
      {renderArticles()}

      
    </div>
  );
}
