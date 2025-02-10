import Image from "next/image";
import Membership from "../app/Components/Membership";
import Shop from "../app/Components/Shop";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto">
      <Image
        src="/hero.jpeg" // Ensure this image exists in the `public` folder
        alt="Hero"
        className="h-[250px] object-cover rounded-lg"
        width={885}
        height={250}
      />
      <Shop/>
      <Membership />
    </div>
  );
}
