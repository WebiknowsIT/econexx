import ClientPage from "./ClientPage";
//import { getMetaData } from "@/lib/getMeta";

export async function generateMetadata() {
 let meta = {};
  return {
    title: meta?.meta_title || 'EconexxWealth | Partner With Us',
    description: meta?.meta_description || "EconexxWealth",
    keywords: meta?.meta_keywords || "EconexxWealth",
    alternates: {
      canonical: meta?.canonical_url || "https://econexxwealth.com/partner-with-us",
    },
  };
}

export default function Page() {
  return <ClientPage />;
}