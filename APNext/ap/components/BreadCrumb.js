function BreadCrumb({ title }) {
  return (
    <div class="hidden px-4 pt-4 md:block lg:px-8">
      <div class="flex w-full flex-wrap items-baseline justify-start text-gray-subtitle">
        <div class="mr-1 text-sm cursor-pointer hover:text-orange-600">
          <span class="font-en">Home</span>
        </div>{" "}
        <div class="mr-1 px-1 text-gray-subtitle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="11"
            viewBox="0 0 7 11"
            class="fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
            ></path>
          </svg>{" "}
        </div>
        <div class="mr-1 text-sm font-medium">
          <span class="font-hi">{title}</span>
        </div>{" "}
        <div class="mr-1 px-1 text-gray-subtitle hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="11"
            viewBox="0 0 7 11"
            class="fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
            ></path>
          </svg>{" "}
        </div>
      </div>
    </div>
  );
}
export default BreadCrumb;
