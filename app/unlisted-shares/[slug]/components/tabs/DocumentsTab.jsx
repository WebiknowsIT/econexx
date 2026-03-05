// components/detail/tabs/DocumentsTab.jsx

const ICON_MAP = {
  "file-text":    "📄",
  "bar-chart-2":  "📊",
  "shield-check": "🛡️",
  "lock":         "🔒",
};

export default function DocumentsTab({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">
        Research &amp; Documents
      </h2>
      <div className="space-y-3">
        {share.documents.map((doc, i) => (
          <div
            key={i}
            className={[
              "flex items-center gap-4 p-4 border rounded-xl cursor-pointer group transition-all",
              doc.locked
                ? "border-primary-100 hover:border-primary-200 hover:bg-primary-50"
                : "border-primary-100 hover:border-secondary-300 hover:bg-secondary-50",
            ].join(" ")}
          >
            {/* Icon */}
            <div
              className={[
                "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg transition-colors",
                doc.locked
                  ? "bg-secondary-100 group-hover:bg-secondary-200"
                  : "bg-primary-100 group-hover:bg-primary-200",
              ].join(" ")}
            >
              {ICON_MAP[doc.icon] ?? "📄"}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="font-semibold text-sm text-primary-900">
                {doc.title}
                {doc.locked && (
                  <span className="ml-2 text-xs bg-secondary-100 text-secondary-700 px-2 py-0.5 rounded-full">
                    Login to Access
                  </span>
                )}
              </div>
              <div className="text-xs text-primary-400 mt-0.5">{doc.meta}</div>
            </div>

            {/* Action */}
            <span className={`text-sm ${doc.locked ? "text-secondary-400" : "text-primary-400 group-hover:text-secondary-600 transition-colors"}`}>
              {doc.locked ? "🔒" : "⬇️"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
