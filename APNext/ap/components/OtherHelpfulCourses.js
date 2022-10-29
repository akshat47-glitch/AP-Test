import HelpfulSeries from "./HelpfulSeries";

function OtherHelpfulCourses({ data }) {
  const series = data.map((val) => {
    return <HelpfulSeries data={val} key={val.id} />;
  });

  return (
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-y-4 lg:gap-x-8 lg:px-4 xl:grid-cols-3">
        {series}
      </div>
    </div>
  );
}
export default OtherHelpfulCourses;
