import Image from "next/image";
import heroImage from "@/public/headerpic.png";
import Button from "../component/atoms/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white py-8 flex flex-col  items-center text-center bg-[url('/back.png')] ">
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center gap-8">
        <div
          data-aos="zoom-in"
          className="flex flex-col  items-center justify-center gap-4"
        >
          <span className="border border-[#3776F6] rounded-lg bg-white text-[#3776F6] px-4 py-2 text-lg lg:text-sm">
            Supercharge Your Instagram 🚀
          </span>
          <h1 className="text-black font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight">
            Ignite Your Instagram
            <span className="block mt-2 lg:mt-4">
              Get Discovered by Millions
            </span>
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl max-w-[600px] max-md:max-w-[300px]">
            Reach new heights with targeted growth strategies. Get real
            followers who love your content and skyrocket your Instagram
            presence.
          </p>
          <Link href="/#pricing">
            <Button className="bg-blue-600 w-[150px] h-[52px] sm:w-[220px] sm:h-[56px] text-white rounded-full font-bold text-lg lg:text-xl transition duration-300 hover:bg-blue-700">
              Get started
            </Button>
          </Link>
        </div>
        <div className="relative w-full flex justify-center">
          <div
            data-aos="zoom-in "
            className="max-w-[90%] lg:max-w-[70%] shadow-lg"
          >
            <Image
              src={heroImage}
              alt="User on Instagram"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
