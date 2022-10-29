import HeaderItemsLeft from "./HeaderitemsLeft";
import HeaderItemsRight from "./HeaderItemsRight";

function Navbar() {
  return (
    <div className="flex h-full justify-between text-xs bg-orange-700 text-slate-50">
      <HeaderItemsLeft />
      <HeaderItemsRight />
    </div>
  );
}
export default Navbar;
