import ClientPage from "./ClientPage";
import * as url from "@/utils/Url";

async function getBlog(slug) {

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
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog does not exist",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt, // ✅ correct

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://econexxwealth.com/news-and-insights/${slug}`,
      siteName: "EconexxWealth",

      images: [
        {
          url: blog.featured_image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],

      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.featured_image],
    },
  };
}

export default function blogs() {
  return <ClientPage />;
}