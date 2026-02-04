'use client';

import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm text-gray-500 mb-6">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-primary-600">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">
                {item.label}
              </span>
            )}
            {i !== items.length - 1 && <span>›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
