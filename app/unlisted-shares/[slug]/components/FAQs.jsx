import Accordion from "@/components/ui/Accordion";

export default function FAQs({ data = [] }) {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">
        FAQs
      </h2>

      <Accordion items={data} />
    </div>
  );
}
