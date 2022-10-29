import Call from "./HeaderItems/Call";
import Donate from "./HeaderItems/Donate";
import Language from "./HeaderItems/Language";
import Menu from "./HeaderItems/Menu";

function HeaderItemsSmall() {
  return (
    <div class="flex h-full content-center items-center justify-center md:space-x-3 lg:space-x-4 lg:pr-8">
      <Language />
      <Call />
      <Donate />
      <Menu />
    </div>
  );
}
export default HeaderItemsSmall;
