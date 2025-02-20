

import Image from "next/image";
import Membership from "../app/Components/Membership";
import Shop from "../app/Components/Shop";
import PopularProducts from "./Components/Popular";

export default function Home() {
  return (
    <div className="flex flex-col items-center  w-full ">


<Image
  src="/hero.jpeg"
  alt="Hero"
  width={885}
  height={250}
  className="w-[885px] h-[250px] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[885px] mx-auto object-cover rounded-lg"
/>









      <Shop />
      <PopularProducts />
      <Membership />
    </div>
  );
}
