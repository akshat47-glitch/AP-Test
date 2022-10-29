function InnerSearchBar(props) {
  return (
    <div class="h-12">
      <div class="flex h-full w-full items-center px-4">
        <div class="w-full">
          <div class="inline-flex w-full items-center py-2 text-gray-subtitle">
            <div
              class="cursor-pointer"
              onClick={() => props.setshowSearchBar(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
                viewBox="0 0 15 13"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.244 12.249a.888.888 0 0 1-1.238 0L.756 7.106a.845.845 0 0 1 0-1.212L6.006.75a.888.888 0 0 1 1.238 0 .845.845 0 0 1 0 1.212l-3.757 3.68h10.138c.483 0 .875.384.875.857a.866.866 0 0 1-.875.857H3.487l3.757 3.68a.845.845 0 0 1 0 1.212Z"
                ></path>
              </svg>
            </div>
            <div class="flex-grow">
              <form action="">
                <input
                  type="search"
                  class="border-0 bg-transparent caret-orange-600 focus:ring-0 ml-4"
                  autoFocus
                  placeholder="Search for courses"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InnerSearchBar;
