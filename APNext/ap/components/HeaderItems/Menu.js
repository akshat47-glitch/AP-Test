function Menu() {
  return (
    <div class="inline-flex cursor-pointer items-center py-4 pl-6 pr-4 md:pl-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="18"
        viewBox="0 0 14 12"
        class="fill-current"
      >
        <path
          fill-rule="evenodd"
          d="M13 10a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h12Zm0-5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h12Zm0-5a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2h12Z"
        ></path>
      </svg>
      <div class="hidden pl-2 lg:block">
        <span class="">Menu</span>
      </div>
    </div>
  );
}
export default Menu;
