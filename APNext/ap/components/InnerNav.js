import { useState } from "react";
import InnerNavDefault from "./InnerNavDefault";
import InnerSearchBar from "./InnerSearchBar";

function InnerNav() {
  const [showSearchBar, setshowSearchBar] = useState(false);
  return (
    <div
      class="sticky top-0 z-secondary-navbar bg-white shadow text-slate-600"
      style={{ "z-index": "99" }}
    >
      <div class="mx-auto max-w-screen-2xl select-none">
        {showSearchBar ? (
          <InnerSearchBar setshowSearchBar={setshowSearchBar} />
        ) : (
          <InnerNavDefault setshowSearchBar={setshowSearchBar} />
        )}
      </div>
    </div>
  );
}

export default InnerNav;
