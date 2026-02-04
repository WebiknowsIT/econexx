import { Linkedin } from "lucide-react";

export default function PromotersManagement({ data = [] }) {
  return (
    <div className="border border-slate-200 rounded-xl p-6 mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Promoters or Management
      </h2>

      {/* Mobile Scroll Wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="text-left py-3 px-2">Name</th>
              <th className="text-left py-3 px-2">Designation</th>
              <th className="text-left py-3 px-2">Experience</th>
              <th className="text-left py-3 px-2">LinkedIn Profile</th>
            </tr>
          </thead>

          <tbody>
            {data.map((person, index) => (
              <tr
                key={index}
                className="border-b last:border-none"
              >
                <td className="py-3 px-2 font-medium">
                  {person.name}
                </td>
                <td className="py-3 px-2">
                  {person.designation}
                </td>
                <td className="py-3 px-2">
                  {person.experience}
                </td>
                <td className="py-3 px-2">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      className="text-blue-600 font-medium"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
