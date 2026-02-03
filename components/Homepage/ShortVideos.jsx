import AnimatedSection from "@/components/AnimatedSection";

export default function ShortVideos() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* HEADING */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-16">
            <AnimatedSection delay={0.2}>
              <h2 className="editorial-title text-4xl text-gray-900 mb-4">
                Important Short Videos
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Watch bite-sized videos to quickly master unlisted shares insights.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* VIDEOS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <AnimatedSection delay={0.1}>
            <VideoCard
              title="Why Unlisted Shares Matter"
              videoId="rQrtlKz1ToM"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <VideoCard
              title="Pre IPO Shares Explained"
              videoId="rQrtlKz1ToM"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <VideoCard
              title="Transfer Process Guide"
              videoId="rQrtlKz1ToM"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <VideoCard
              title="Market Fraud Awareness"
              videoId="rQrtlKz1ToM"
            />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Video Card Component */
/* ---------------------------------- */

function VideoCard({ title, videoId }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[9/16]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}
