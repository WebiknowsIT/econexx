import ClientPage from "./ClientPage";
import * as url from "@/utils/Url";
//import { getMetaData } from "@/lib/getMeta";

async function getBlog(slug) {

  console.log("Slug:", slug);
  console.log("API URL:", `${url.BASE_URL}/api/news-and-insights/${slug}`);
   
  try {
    const res = await fetch(`${url.BASE_URL}/api/news-and-insights/${slug}`, {
      cache: "no-store",
    });

    const json = await res.json();

    if (!json.success) {
      console.error("API ERROR:", json.message);
      return null;
    }

    return json.data;
  } catch (error) {
    console.error("FETCH ERROR:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // 🔥 FIX
  const blog = await getBlog(slug);
  console.log(blog);
  
  return {
    title: blog?.title,
    description: blog?.short_description || "Blog details",
    openGraph: {
      title: blog?.title,
      description: blog?.short_description,
      url: `https://econexxwealth.com/news-and-insights/${params.slug}`,
      siteName: "EconexxWealth",
      images: [
        {
          url: blog?.featured_image,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.title,
      description: blog?.short_description,
      images: [blog?.featured_image],
    },
  };
}

export default function blogs() {
  return <ClientPage />;
}