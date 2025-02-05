import Image from "next/image";
import PageUI from "./Cards";
export default function UlSection() {
  return (
    <div
      id="features"
      className="flex  items-center justify-center  bg-[#F9FAFB] w-[100vw] py-8"
    >
      <div className="flex flex-col">
        <div className="flex flex-col mt-8 " data-aos="fade-up">
          <div className="container  px-4 flex  justify-center items-center  flex-col text-center">
            <h3 className="text-[#3776F6]"> WHY ASTRA LEMON</h3>
            <div className="w-full lg:w-6/12 px-4 ">
              <h1 className="text-black text-5xl pt-3 max-md:text-2xl  font-bold mb-8 ">
                Our Features
              </h1>
              <p className="text-gray-700 text-lg max-md:text-[18px]   font-light">
                Achieve lasting success with innovative strategies designed to
                drive consistent, sustainable growth and propel your business
                forward.{" "}
              </p>
            </div>
            <div className="flex overflow-x-auto max-md:overflow-x-hidden  max-md:flex-col space-x-4 py-4 pr-[4.5rem] custom-scrollbar"></div>
            <PageUI />
          </div>
        </div>
      </div>
    </div>
  );
}
