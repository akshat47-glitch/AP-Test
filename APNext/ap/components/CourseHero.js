function CourseHero({
  heroCourseData: {
    details: { thumbnail },
    details,
  },
}) {
  return (
    <div class="px-4 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-start">
        <div class="w-full shrink-0 md:w-2/5">
          <div class="aspect-[16/9] w-full">
            <div class="relative h-full w-full overflow-hidden rounded">
              <img
                class="h-full w-full object-cover"
                src={
                  thumbnail.domain +
                  "/" +
                  thumbnail.basePath +
                  "/" +
                  thumbnail.qualities["0"] +
                  "/" +
                  thumbnail.key
                }
                alt="Thumbnail"
              />
              <div class="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>
              <img
                class="absolute right-1 bottom-1 object-contain logo-height-lg"
                src="https://acharyaprashant.org/images/ic_apsignature_hindi.png"
                alt="AP Name Logo"
                style={{ height: "52px" }}
              />
            </div>
          </div>
          <div class="hidden pt-4 md:block">
            <div class="flex flex-col items-center md:items-start">
              <div class="pb-3 text-sm font-medium text-gray-title md:pb-1">
                <span class="font-en">Share this series</span>
                <span class="invisible md:visible">:</span>
              </div>
              <div class="w-full px-8 md:px-0">
                <div class="flex w-full justify-center space-x-4 md:justify-start">
                  <div class="share-icon">
                    <a
                      href="https://wa.me/?text=undefined%0Ahttps%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3"
                      data-action="share/whatsapp/share"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        class="fill-current"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm.98 4.577a9.708 9.708 0 0 0-8.417 14.5L6.71 24.615l5.1-1.413.292.143a9.708 9.708 0 0 0 13.84-8.745c0-5.284-4.178-9.523-9.462-9.523Zm.026 1.807c4.178 0 7.742 3.256 7.742 7.803 0 4.424-3.564 8.049-7.926 8.11-2.52 0-4.424-1.352-4.424-1.352l-3.01.799.737-2.95c-.083-.131-1.229-1.986-1.229-4.3 0-4.424 3.625-8.11 8.11-8.11Zm-2.944 3.413-.092.002h-.492l-.052.003c-.132.015-.347.09-.562.304-1.352 1.352-.799 3.257.184 4.486.184.245 1.413 2.457 4.055 3.624 1.966.86 2.396.738 2.95.615.675-.062 1.35-.615 1.658-1.167.061-.185.369-.984.123-1.106l-2.15-1.045-.062-.038c-.164-.095-.328-.119-.491.1l-.738.983-.066.043c-.15.092-.272.126-.487.018-.921-.491-2.212-1.044-3.317-2.888-.062-.245.061-.368.184-.491l.553-.86.042-.053c.063-.105.01-.21-.042-.316l-.737-1.782-.047-.111c-.138-.303-.276-.324-.414-.321Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="share-icon">
                    <a
                      href="http://twitter.com/share?url=https%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3&amp;text=%0Aundefined&amp;hashtags=AcharyaPrashant,courses,wisdom,spirituality"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        class="fill-black"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm4.223 8.2c-2.17 0-3.93 1.667-3.93 3.724 0 .273.03.54.09.796-3.221-.198-6.078-1.66-8.025-3.865a3.468 3.468 0 0 0-.541 1.86c0 1.31.733 2.457 1.83 3.095a3.974 3.974 0 0 1-1.83-.47v.083c0 1.81 1.398 3.309 3.227 3.583a4.022 4.022 0 0 1-1.873.118c.493 1.464 1.94 2.525 3.684 2.525a8.351 8.351 0 0 1-4.912 1.573c-.32 0-.634-.017-.943-.051a11.5 11.5 0 0 0 6.048 1.696c6.133 0 11.105-4.71 11.105-10.52v-.158l.001-.105v-.242a6.335 6.335 0 0 0 1.913-1.896 6.898 6.898 0 0 1-2.202.572 3.55 3.55 0 0 0 1.673-2.033 6.399 6.399 0 0 1-2.44.898A4.024 4.024 0 0 0 19.722 8.7Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="share-icon">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="31"
                        viewBox="0 0 32 31"
                        class="fill-black"
                      >
                        <path d="M16 .5C7.44.5.5 7.244.5 15.563c0 7.46 5.588 13.64 12.915 14.836V18.705h-3.74v-4.208h3.74v-3.103c0-3.6 2.263-5.562 5.568-5.562 1.583 0 2.944.114 3.339.165V9.76l-2.293.001c-1.797 0-2.143.83-2.143 2.048v2.686h4.288l-.56 4.208h-3.728V30.5c7.668-.907 13.614-7.243 13.614-14.942C31.5 7.244 24.56.5 16 .5Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="share-icon">
                    <a
                      href="https://www.linkedin.com/shareArticle/?url=https://acharyaprashant.org/en/courses/series/course-series-eeb9d3"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        class="fill-black"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm-4.868 11.036h-3.59V23.5h3.59V11.536Zm9.93-.335c-1.579 0-2.775.574-3.421 1.46v-1.125h-3.59V23.5h3.59v-6.533c0-1.699.91-2.464 2.225-2.464 1.149 0 2.082.694 2.082 2.177v6.82h3.59v-7.346c0-3.23-2.058-4.953-4.475-4.953ZM8.839 6.175A2.176 2.176 0 0 0 6.684 8.33c0 1.173.981 2.154 2.154 2.154a2.176 2.176 0 0 0 2.153-2.154 2.176 2.176 0 0 0-2.153-2.154Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col self-stretch pt-4 text-sm md:pl-4 md:pt-0 lg:text-lg">
          <div class="text-lg font-medium text-gray-title lg:text-xl">
            <span class="font-hi">{details.subtitle}</span>
          </div>
          <div class="text-justify text-base text-gray-subtitle md:pr-4">
            <div class="hidden md:block">
              <span class="font-hi">{details.description}</span>
            </div>{" "}
            <div class="md:hidden">
              <span class="font-hi">
                {details.description.slice(0, 154) + "..."}
              </span>{" "}
              <span class="cursor-pointer text-orange-600 hover:text-orange-800">
                <span class="font-hi">और पढ़ें</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseHero;
