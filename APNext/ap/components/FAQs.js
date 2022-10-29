import SingleFAQ from "./SingleFAQ";

function FAQs({ data }) {
  const faqs = data.map((data) => {
    return <SingleFAQ data={data} />;
  });
  return (
    <div class="bg-gradient-to-b from-slate-50 px-4 py-16 md:px-4 lg:px-20">
      <div class="md:flex">
        <div class="pb-10 md:w-1/3 md:pb-0">
          <div class="text-lg font-semibold text-gray-title">
            <span class="font-en">FAQs</span>
          </div>{" "}
          <div class="pt-1">
            <span class="font-en dynamicHTMLContainer">
              <p>
                Can’t find the answer you’re looking for? Reach out to our{" "}
                <a target="_blank" href="/technical-support">
                  <span style={{ color: "#DD6B20" }}>support</span>
                </a>{" "}
                team
              </p>
            </span>
          </div>
        </div>{" "}
        <div class="w-full md:pl-24">{faqs}</div>
      </div>
    </div>
  );
}
export default FAQs;
