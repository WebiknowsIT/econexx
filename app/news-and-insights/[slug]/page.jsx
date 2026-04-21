"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogBySlug } from "@/store/action/blogActions";
import { Calendar, Eye, Clock, ArrowLeft, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageLoader from "@/components/PageLoader";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogDetail() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { blogDetail, loading } = useSelector((state) => state.blog);

    useEffect(() => {
        if (slug) {
            dispatch(fetchBlogBySlug(slug));
        }
    }, [slug]);

    if (loading) return <PageLoader />;

    const blog = blogDetail || {};
    const title = blog?.title || "Blog Title";
    const content = blog?.content || "<p>No content available</p>";
    const image = blog?.featured_image || "/images/blog1.jpg";
    const date = blog?.published_at
        ? new Date(blog.published_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "Recent";
    const views = blog?.view_count || 0;
    const readTime = blog?.read_time || "5 min";
    const category = blog?.category || "Insights";

    return (
        <div className="min-h-screen">
            <div className="bg-white border-b border-primary-100 sticky top-0 z-10 shadow-sm">
                <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
                    <Link
                        href="/news-and-insights"
                        className="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-700 transition-colors duration-200 group"
                    >
                        <ArrowLeft
                            size={15}
                            className="group-hover:-translate-x-1 transition-transform duration-200"
                        />
                        Back to insights
                    </Link>

                    <div className="flex items-center gap-1.5 text-xs text-primary-400">
                        <BookOpen size={13} />
                        <span>{readTime} read</span>
                    </div>
                </div>
            </div>

            {/* Hero section */}
            <section className="heroSection hero-glow gridBgDark noise bg-primary-900 py-10 px-6 lg:px-16 overflow-hidden">
                <div className="max-w-5xl mx-auto px-6">
                    <>
                        <div className="mb-5">
                            <span className="inline-block bg-primary-100 text-primary-600 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full">
                                {category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-[2.6rem] font-bold text-white mb-6 leading-[1.2] tracking-tight max-w-3xl">
                            {title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-5 text-sm text-primary-400 ">
                            <span className="flex items-center gap-1.5">
                                <Calendar size={14} className="text-primary-400" />
                                {date}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-primary-200 hidden sm:block" />
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} className="text-primary-400" />
                                {readTime} read
                            </span>
                            <span className="w-1 h-1 rounded-full bg-primary-200 hidden sm:block" />
                            <span className="flex items-center gap-1.5">
                                <Eye size={14} className="text-primary-400" />
                                {views.toLocaleString()} views
                            </span>
                        </div>


                    </>
                </div>
            </section>

            {/* Article content */}
            <section className="max-w-5xl mx-auto px-6 py-4 md:py-6">
                {/* Meta row */}

                <div className="rounded-2xl overflow-hidden border border-primary-100 shadow-md mb-6">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto"
                        onError={(e) => { e.target.src = "/images/blog1.jpg"; }}
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-start">
                    <article
                        className={`
                                prose prose-lg max-w-none

                                /* Headings */
                                prose-headings:text-primary-900
                                prose-headings:font-bold
                                prose-headings:tracking-tight
                                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3

                                /* Body text */
                                prose-p:text-primary-700
                                prose-p:leading-relaxed
                                prose-p:mb-5

                                /* Links */
                                prose-a:text-primary-500
                                prose-a:no-underline
                                hover:prose-a:underline
                                prose-a:font-medium

                                /* Lists */
                                prose-ul:text-primary-700
                                prose-ol:text-primary-700
                                prose-li:my-1.5

                                /* Blockquote */
                                prose-blockquote:border-l-4
                                prose-blockquote:border-primary-400
                                prose-blockquote:bg-primary-50
                                prose-blockquote:rounded-r-xl
                                prose-blockquote:px-5
                                prose-blockquote:py-3
                                prose-blockquote:not-italic
                                prose-blockquote:text-primary-600

                                /* Code */
                                prose-code:text-primary-700
                                prose-code:bg-primary-100
                                prose-code:px-1.5
                                prose-code:py-0.5
                                prose-code:rounded
                                prose-code:text-sm

                                /* HR */
                                prose-hr:border-primary-200
                                prose-hr:my-10

                                /* Images */
                                prose-img:rounded-xl
                                prose-img:border
                                prose-img:border-primary-100
                                prose-img:shadow-sm

                                /* Strong */
                                prose-strong:text-primary-800
                                prose-strong:font-semibold
                            `}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />


                    {/* Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-20 space-y-5">
                            <div className="bg-white border border-primary-100 rounded-2xl p-5 shadow-sm">
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-4">
                                    Article Details
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm">
                                        <Calendar size={14} className="text-primary-400 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-xs text-primary-400 mb-0.5">Published</p>
                                            <p className="text-primary-700 font-medium">{date}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <Clock size={14} className="text-primary-400 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-xs text-primary-400 mb-0.5">Read time</p>
                                            <p className="text-primary-700 font-medium">{readTime}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <Eye size={14} className="text-primary-400 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-xs text-primary-400 mb-0.5">Views</p>
                                            <p className="text-primary-700 font-medium">{views.toLocaleString()}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
            <section className="bg-white border-t border-primary-100 py-8">
                <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-primary-500">
                        Enjoyed this article? Explore more insights.
                    </p>
                    <Link
                        href="/news-and-insights"
                        className="flex items-center gap-2 text-sm font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 border border-primary-200 px-5 py-2.5 rounded-xl transition-colors duration-200"
                    >
                        <ArrowLeft size={14} />
                        All Articles
                    </Link>
                </div>
            </section>
        </div>
    );
}