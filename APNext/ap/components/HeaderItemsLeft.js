import Image from "next/image";

function HeaderItemsLeft() {
  return (
    <div class="flex items-stretch pl-4 text-sm lg:pl-8">
      <div class="shrink-0 self-center">
        <Image
          className="mr-2 h-8 w-8 rounded-full"
          src="https://acharyaprashant.org/images/ic_aplogo.png"
          alt="Acharya Prashant"
          height={"32px"}
          width={"32px"}
        />
      </div>
      <div class="hidden h-full flex-row items-stretch justify-center font-medium md:flex">
        <div class="flex cursor-pointer items-center px-4 opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100">
          <span class="">Home</span>{" "}
        </div>
        <div class="flex cursor-pointer items-center px-4 opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100 bg-orange-600">
          <span class="">Video Courses</span>{" "}
        </div>
        <div class="flex cursor-pointer items-center px-4 opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100">
          <span class="">His Books</span>{" "}
        </div>
        <div class="flex cursor-pointer items-center px-4 opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100">
          <span class="">Donate</span>{" "}
        </div>
      </div>
    </div>
  );
}
export default HeaderItemsLeft;
