import APLogo from "./APLogo";

function HelpfulSeries({ data }) {
  const { domain, basePath, key, qualities } = data.thumbnail;
  const imageSrc = domain + "/" + basePath + "/" + qualities["0"] + "/" + key;
  return (
    <div class="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow">
      <div class="flex flex-row items-start">
        <div class="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1">
          <SeriesLogo language={data.language} imageSrc={imageSrc} />
          <div class="rounded py-px px-1.5 text-xs text-slate-700 bg-green-100">
            <span class="font-en">Series</span>
          </div>
        </div>
        <div class="ml-4 flex flex-shrink flex-col">
          <div class="text-lg font-medium text-gray-title">
            <span class="font-en">{data.title}</span>
          </div>
          <div class="text-sm leading-normal text-gray-subtitle laptop:text-base">
            <span class="font-en">{data.subtitle}</span>
          </div>
          <div class="text-sm text-gray-subtitle">
            <span class="font-en">
              {data.coursesCount}
              {data.coursesCount > 1 ? " Courses" : " Course"}
            </span>
          </div>
        </div>
      </div>
      <div class="pt-2 group-hover:invisible tab:pr-4">
        <div class="h-[0.5px] w-full opacity-100 bg-gray-300"></div>
      </div>
    </div>
  );
}

function SeriesLogo({ language, imageSrc }) {
  return (
    <div class="w-full">
      <div
        id="stacked-images-wrapper"
        class="relative aspect-[16/9] w-full overflow-hidden"
      >
        <div class="absolute inset-0 mx-2 border border-t border-white">
          <div class="relative h-full w-full overflow-hidden rounded">
            <img
              class="h-full w-full object-cover"
              src={imageSrc}
              alt="Thumbnail"
            />
            <div class="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>
            <APLogo language={language} />
          </div>
        </div>
        <div class="absolute inset-0 top-1 mx-1 border border-t border-white">
          <div class="relative h-full w-full overflow-hidden rounded">
            <img
              class="h-full w-full object-cover"
              src={imageSrc}
              alt="Thumbnail"
            />
            <div class="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>
            <APLogo language={language} />
          </div>
        </div>
        <div class="absolute inset-0 top-2 border border-t border-white">
          <div class="relative h-full w-full overflow-hidden rounded">
            <img
              class="h-full w-full object-cover"
              src={imageSrc}
              alt="Thumbnail"
            />
            <div class="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>
            <APLogo language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HelpfulSeries;
