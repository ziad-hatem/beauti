import FaqQuestion from "@/components/products/FaqQuestion";

const Faq = ({ faqQustions }) => {
  return (
    <div>
      <h2 className="text-22 mb-6 hidden font-extrabold text-secone lg:block">
        أسئلة شائعة
      </h2>
      <div className="flex flex-col gap-2 lg:gap-4">
        {faqQustions.map((question) => (
          <div key={question.title} className="">
            <FaqQuestion question={question} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Faq;
