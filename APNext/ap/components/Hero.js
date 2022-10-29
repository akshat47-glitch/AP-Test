import BreadCrumb from "./BreadCrumb";
import Course from "./Course";
import CourseGrid from "./CourseGrid";
import CourseHeading from "./CourseHeading";
import CourseHero from "./CourseHero";
import FAQs from "./FAQs";
import InnerNav from "./InnerNav";
import OtherHelpfulCourses from "./OtherHelpfulCourses";

function Hero({ heroCourseData, faqData }) {
  const series = heroCourseData.courses.map((course) => {
    return <Course data={course} key={course.id} />;
  });
  return (
    <div class="min-h-full w-full flex-grow">
      <InnerNav />
      <div relative mx-auto max-w-screen-2xl>
        <div>
          <BreadCrumb title={heroCourseData.details.title} />
          <CourseHeading title={heroCourseData.details.title} />
          <CourseHero heroCourseData={heroCourseData} />
          <div class="px-4 lg:px-8">
            <div>
              <div class="mt-8 text-lg font-medium md:mt-12 md:text-xl lg:mt-16">
                <span class="font-en">
                  Courses ({heroCourseData.details.coursesCount})
                </span>
              </div>{" "}
              <div class="mt-1 h-[0.5px] w-full opacity-100 bg-gray-300 md:mt-2"></div>
            </div>
          </div>
          {<CourseGrid Courses={series} />}
        </div>
        <div class="px-4 lg:px-8">
          <div>
            <div class="mt-8 text-lg font-medium md:mt-12 md:text-xl lg:mt-16">
              <span class="font-en">Other Helpful Courses</span>
            </div>{" "}
            <div class="mt-1 h-[0.5px] w-full md:mt-2 opacity-100 bg-gray-300"></div>
          </div>
        </div>

        <OtherHelpfulCourses data={heroCourseData.relatedContent} />

        <FAQs data={faqData} />
      </div>
    </div>
  );
}
export default Hero;
