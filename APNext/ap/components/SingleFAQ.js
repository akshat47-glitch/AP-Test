import { data } from "autoprefixer";
import { useState } from "react";

function SingleFAQ({ data }) {
  const [showMarkDown, setShowMarkDown] = useState(false);
  return (
    <div>
      <div onClick={() => setShowMarkDown(!showMarkDown)}>
        <div class="flex items-center justify-between md:cursor-pointer">
          <div class="pr-2 font-semibold text-gray-subtitle">
            <span class="font-hi"> {data.question}</span>
          </div>{" "}
          <div class="h-3 w-3 text-slate-400 hover:text-slate-800">
            {!showMarkDown ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="7"
                viewBox="0 0 11 7"
                class="fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="7"
                viewBox="0 0 11 7"
                class="fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.207 6.207a1 1 0 0 1-1.414 0L5.5 2.914 2.207 6.207A1 1 0 0 1 .793 4.793l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414Z"
                ></path>
              </svg>
            )}
          </div>
        </div>{" "}
        {showMarkDown && (
          <div id="markdown" class="w-full">
            <div class="tab:text-md pt-1 pr-4 leading-normal text-gray-subtitle tab:pr-8">
              <div dangerouslySetInnerHTML={{ __html: data.answer }} />
            </div>
          </div>
        )}
      </div>{" "}
      <div class="my-4 h-[0.5px] justify-start bg-gray-separator"></div>
    </div>
  );
}
export default SingleFAQ;
