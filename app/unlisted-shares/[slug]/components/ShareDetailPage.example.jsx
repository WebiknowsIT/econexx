// pages/shares/[slug].jsx  (or app/shares/[slug]/page.jsx for App Router)
// Shows exactly how to wire ShareDetailPage with your data + your FAQ component.

import ShareDetailPage from "@/components/detail/ShareDetailPage";
import { razorpayData, razorpayFaqs } from "@/data/razorpayData";

export default function RazorpayDetailPage() {
  return (
    <ShareDetailPage
      share={razorpayData}
      faqData={razorpayFaqs}   // ← same shape as econexxFaqs: [{ id, question, answer }]
    />
  );
}

// ── For dynamic slug routing ────────────────────────────────────────────────
// export async function getStaticProps({ params }) {
//   const share   = await getShareBySlug(params.slug)   // your data fetch
//   const faqData = await getFaqsByShareId(share.id)
//   return { props: { share, faqData } }
// }
