function Course({ data }) {
  const hours = data.courseHours.toString().split(".")["0"];
  const minutes = data.courseHours.toString().split(".")["1"]
    ? Math.round(("0." + data.courseHours.toString().split(".")["1"]) * 60)
    : 0;

  return (
    <div class="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow">
      <div class="flex flex-col space-y-2">
        <div class="self-start pb-2">
          <div id="" class="part-pointer">
            <span class="font-hi">कोर्स {data.series.order.seq}</span>&nbsp;
          </div>
        </div>{" "}
        <div class="flex w-full flex-col text-left">
          <div>
            <div class="text-lg font-medium leading-normal text-gray-title">
              <span class="font-hi">{data.title}</span>
            </div>{" "}
            <div class="text-sm leading-normal text-gray-subtitle lg:text-base">
              <span class="font-hi">{data.subtitle}</span>
            </div>{" "}
            <div class="pt-1 text-xs text-gray-subtitle lg:text-sm">
              <span class="font-en">
                {hours &&
                  hours > 0 &&
                  (hours > 1 ? hours + " hours" : hours + " hour")}{" "}
                {minutes &&
                  minutes > 0 &&
                  (minutes > 1 ? minutes + " minutes" : minutes + " minute")}
              </span>
            </div>{" "}
            <div class="pt-1 text-xs text-gray-subtitle lg:text-sm">
              <span class="font-en">Contribution: ₹{data.amount}</span>
            </div>
          </div>{" "}
          <div class="mt-2 flex flex-wrap text-xs">
            <div class="mr-1">
              <div class="rounded py-px px-1.5 text-xs text-slate-700 bg-blue-100">
                <span class="font-en">
                  {data.language == "hindi" ? "Hindi" : "English"}{" "}
                </span>
              </div>{" "}
            </div>
          </div>
        </div>{" "}
        <div>
          <div class="inline-flex items-center space-x-3 text-xs font-medium">
            <div class="cursor-pointer rounded-md text-center duration-150 btn-borderless btn-base">
              <span class="font-en hover:text-orange-800 transition">
                ADD TO CART
              </span>
            </div>{" "}
            <div class="self-stretch py-2">
              <div class="w-px opacity-100 bg-gray-300 h-2"></div>
            </div>{" "}
            <div class="cursor-pointer rounded-md text-center duration-150 btn-borderless btn-base">
              <span class="font-en hover:text-orange-800 transition">
                ENROL
              </span>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      <div class="pt-2 group-hover:invisible">
        <div class=" h-[0.5px] w-full opacity-100 bg-gray-300"></div>
      </div>
    </div>
  );
}
export default Course;
