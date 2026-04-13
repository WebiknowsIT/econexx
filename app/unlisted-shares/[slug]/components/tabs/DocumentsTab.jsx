import * as url from "@/utils/Url";
import {
  BarChart2,
  Download,
  FileText,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

const ICON_MAP = {
  "annual report": <FileText className="w-4 h-4" />,
  "financial presentation": <BarChart2 className="w-4 h-4" />,
  compliance: <ShieldCheck className="w-4 h-4" />,
};

export default function DocumentsTab({ share }) {
  const documents = share?.documents || [];
  const events = share?.events || [];

  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7 space-y-8">
      
      {/* ================= DOCUMENTS ================= */}
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-6">
          Research &amp; Documents
        </h2>

        {!documents.length && (
          <p className="text-sm text-gray-500">
            No documents available
          </p>
        )}

        <div className="space-y-3">
          {documents.map((doc, i) => {
            const typeKey = doc.type?.toLowerCase();
            const fileUrl = `${url.BASE_URL}/${doc.file}`;

            return (
              <a
                key={i}
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-primary-100 rounded-xl group hover:border-secondary-300 hover:bg-secondary-50 transition-all"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary-100 group-hover:bg-primary-200">
                  {ICON_MAP[typeKey] ?? "📄"}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="font-semibold text-sm">
                    {doc.type}
                  </div>
                  <div className="text-xs mt-0.5">
                    Year: {doc.year}
                  </div>
                </div>

                {/* Action */}
                <Download className="w-4 h-4 text-primary-400 group-hover:text-secondary-600" />
              </a>
            );
          })}
        </div>
      </div>

      {/* ================= EVENTS ================= */}
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-6">
          Events & Announcements
        </h2>

        {!events.length && (
          <p className="text-sm text-gray-500">
            No events available
          </p>
        )}

        <div className="space-y-3">
          {events.map((event, i) => (
            <a
              key={i}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-primary-100 rounded-xl group hover:border-secondary-300 hover:bg-secondary-50 transition-all"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary-100 group-hover:bg-primary-200">
                <CalendarDays className="w-4 h-4" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="font-semibold text-sm">
                  {event.title}
                </div>
                <div className="text-xs mt-0.5 text-gray-500">
                  {event.subtitle}
                </div>
                <div className="text-xs mt-1">
                  Date: {formatDate(event.date)}
                </div>
              </div>

              {/* Action */}
              <Download className="w-4 h-4 text-primary-400 group-hover:text-secondary-600" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}