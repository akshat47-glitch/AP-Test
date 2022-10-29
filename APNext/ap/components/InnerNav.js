import Image from "next/image";

function InnerNav() {
  return (
    <div class="sticky top-0 z-secondary-navbar bg-white shadow">
      <div class="mx-auto max-w-screen-2xl select-none">
        <div class="h-12">
          <div class="flex h-full items-center justify-between">
            <div class="flex cursor-pointer items-center pl-4 laptop:pl-8">
              <div>
                <Image
                  class="h-6 object-contain"
                  src="https://acharyaprashant.org/images/ic_courses.png"
                  alt="content home"
                  height={"100%"}
                  width={"100%"}
                />
              </div>
              <div class="ml-6 hidden w-[36rem] flex-grow tab:block">
                <div class="items-center rounded border border-gray-disabled shadow-sm">
                  <div class="relative">
                    <div class="relative flex w-full flex-row">
                      <button class="flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 text-xs font-normal">
                        <div class="text-xs font-medium text-gray-subtitle">
                          <span class="font-en">All</span>
                        </div>
                        <div class="px-3 text-slate-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="6"
                            viewBox="0 0 9 6"
                            class="fill-current"
                          >
                            <path d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854Z"></path>
                          </svg>
                        </div>
                      </button>
                      <input
                        type="search"
                        class="h-9 w-full border-0 text-gray-title caret-brand-600 focus:ring-0"
                        placeholder=" Search for courses"
                      />
                      <button class="items-end rounded-r bg-brand-200 fill-current py-1 px-2 text-slate-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex h-10 content-center items-center justify-center space-x-4 pr-4 laptop:pr-8">
              <div class="cursor-pointer tab:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  class="fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"
                  ></path>
                </svg>
              </div>
              <div class="whitespace-nowrap py-4 text-sm">
                <div class="cursor-pointer rounded-md text-center transition-colors duration-150 btn-solid btn-sm svelte-5g42hi">
                  <span class="font-en">Login</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InnerNav;
