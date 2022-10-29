import Image from "next/image";
import HeaderItem from "./HeaderItem";

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header
      className="flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={HomeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={BadgeCheckIcon} />
        <HeaderItem title="SEARCH" Icon={CollectionIcon} />
        <HeaderItem title="ACCOUNT" Icon={SearchIcon} />
      </div>
      <Image src="https://links.papareact.com/ua6" width={200} height={100} />
    </header>
  );
}
export default Header;
