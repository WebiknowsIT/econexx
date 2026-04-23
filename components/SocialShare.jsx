"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Link as LinkIcon,
} from "lucide-react";

export default function SocialShare({ title, slug }) {
  const url =
    typeof window !== "undefined"
      ? window.location.href
      : `https://econexxwealth.com/news-and-insights/${slug}`;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const openShare = (link) => {
    window.open(link, "_blank", "width=600,height=500");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">

  {/* WhatsApp */}
  <button
    onClick={() =>
      openShare(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`)
    }
    className="share-btn whatsapp"
    title="WhatsApp"
  >
    <svg width="18" height="18" viewBox="0 0 32 32" fill="white">
      <path d="M16.001 3C9.373 3 4 8.372 4 15c0 2.646.865 5.093 2.329 7.082L4 29l7.134-2.276A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3z"/>
    </svg>
  </button>

  {/* Facebook */}
  <button
    onClick={() =>
      openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`)
    }
    className="share-btn facebook"
    title="Facebook"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.1V12h2.4V9.8c0-2.37 1.42-3.68 3.6-3.68 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48V12h2.64l-.42 2.88h-2.22v6.99A10 10 0 0022 12z"/>
    </svg>
  </button>

  {/* Twitter / X */}
  <button
    onClick={() =>
      openShare(
        `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
      )
    }
    className="share-btn twitter"
    title="X (Twitter)"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M18.244 2H21l-6.554 7.49L22 22h-6.828l-5.347-7.027L3.6 22H1l7.025-8.03L2 2h6.828l4.868 6.42L18.244 2z"/>
    </svg>
  </button>

  {/* LinkedIn */}
  <button
    onClick={() =>
      openShare(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
      )
    }
    className="share-btn linkedin"
    title="LinkedIn"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M20.45 20.45h-3.55v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69H9.36V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.33 2.4 4.33 5.51v6.23zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
    </svg>
  </button>

  {/* Copy */}
  <button onClick={copyLink} className="share-btn copy" title="Copy Link">
    🔗
  </button>

</div>
  );
}