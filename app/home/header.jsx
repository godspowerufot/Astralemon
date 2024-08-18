import Image from "next/image";
import heroImage from "@/public/headerpic.jpg";
import Button from "../component/atoms/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white py-8 max-md:p-0 lg:ml-[5%]">
      <div className="mx-auto flex w-[100%] flex-col lg:flex-row items-start lg:items-center justify-between px-4 lg:px-8">
        <div
          data-aos="zoom-in"
          className="flex flex-col items-start justify-start lg:w-[90%] mt-5 gap-4 lg:gap-6 mb-8 max-md:mb-0 lg:mb-0"
        >
          <span className="border border-[#3776F6] rounded-lg bg-white text-[#3776F6] px-4 py-2 text-lg lg:text-sm mb-4 max-md:mb-0 text-center">
            Supercharge Your Instagram 🚀
          </span>
          <div className="text-start mb-4">
            <h1 className="text-black font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight">
              Ignite Your Instagram
              {/* Separate the lines into spans for better control */}
              <span className=" lg:inline lg:whitespace-nowrap">
                <br className="lg:hidden md:hidden sm:hidden" />
                <span className="lg:block lg:mt-2">
                  Get Discovered by Millions
                </span>
              </span>
            </h1>
          </div>
          <p className="text-gray-700 mb-8 max-md:mb-2 text-start max-w-[90%] text-lg lg:text-xl">
            Reach new heights with targeted growth strategies. Get real
            followers who love your content and skyrocket your Instagram
            presence.
          </p>
          <Link href="/Registration">
            <Button className="bg-blue-600 w-[100px] h-[52px] sm:w-[220px] sm:h-[56px] text-white rounded-full font-bold text-lg lg:text-xl transition duration-300 hover:bg-blue-700">
              Get started
            </Button>
          </Link>
        </div>
        <div className="flex justify-center lg:w-1/2 max-md:mt-9 max-md:mb-5 max-md:max-w-full">
          <div
            className="relative max-md:w-[100%] md:w-full lg:max-w-lg"
            data-aos="zoom-in"
          >
            <Image
              src={heroImage}
              data-aos="zoom-in"
              data-aos-duration="3000"
              alt="User on Instagram"
              className="w-full object-cover lg:w-[80%]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
