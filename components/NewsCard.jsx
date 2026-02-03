import { Eye, Heart } from "lucide-react";
import Link from "next/link";

export default function NewsCard(props) {
  return (
    <Link
      href={`/news/${props.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-primary-600 transition">
          {props.title}
        </h3>

        <p className="text-gray-500 text-sm mb-6 line-clamp-3">
          {props.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{props.date}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Eye size={16} /> {props.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart size={16} /> {props.likes}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
