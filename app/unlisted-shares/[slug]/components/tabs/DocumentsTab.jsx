import * as url from "@/utils/Url";
import {
  BarChart2,
  Download,
  FileText,
  Lock,
  ShieldCheck,
} from "lucide-react";

const ICON_MAP = {
  "annual report": <FileText className="w-4 h-4" />,
  "financial presentation": <BarChart2 className="w-4 h-4" />,
  "compliance": <ShieldCheck className="w-4 h-4" />,
};

export default function DocumentsTab({ share }) {
  const documents = share?.financial_documents || [];

  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h2 className="text-2xl font-bold text-primary-900 mb-6">
        Research &amp; Documents
      </h2>

      {/* ✅ Empty State */}
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
              className="flex items-center gap-4 p-4 border border-primary-100 rounded-xl cursor-pointer group hover:border-secondary-300 hover:bg-secondary-50 transition-all"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary-100 group-hover:bg-primary-200 transition-colors">
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
              <span className="text-primary-400 group-hover:text-secondary-600 transition-colors">
                <Download className="w-4 h-4" />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}