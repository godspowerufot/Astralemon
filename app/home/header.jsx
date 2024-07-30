import Image from "next/image";
import heroImage from "@/public/headerpic.jpg";
import Notifications from "@/public/Notification.png";
import twoNotifications from "@/public/2ksubscriber.png";
import Button from "../component/atoms/Button";
import Icon from "@/public/logo12.png";
import Icons from "@/public/Icon30.png";
const Header = () => {
  return (
    <header className="bg-white py-8 mt-5 max-md:mt-0">
      <div className=" mx-auto flex flex-col ml-[7%] max-md:ml-[1%] md:flex-row items-start  md:items-center justify-between px-4 md:px-8">
        <div
          data-aos="zoom-in"
          className="flex flex-col items-start max-md:items-start mr-[5%] max- md:justify-start md:w-1/2 mt-7 gap-[20px] max-md:gap-[15px] mb-8 md:mb-0"
        >
          <span className="border-solid h-8 border rounded-lg flex items-center justify-center bg-white text-[#3776F6] text-center w-[250px] border-[#3776F6] px-3 py-1 text-sm mb-4">
            Supercharge Your Instagram 🚀
          </span>
          <div className="flex  flex-col items-start justify-stretch max-md:items-center text-start max-md:text-center mb-4">
            <h1 className="lining text-black  max-md:leading-[45px] font-bold text-5xl max-md:text-[24.5px]">
              Ignite Your Instagram
              <p>Get Discovered by Millions</p>
            </h1>
          </div>
          <p className="text-gray-700 mb-8 text-start max-md:text-left w-[80%]  max-md:w-full">
            Reach new heights with targeted growth strategies. Get real
            followers who love your content and skyrocket your Instagram
            presence.
          </p>
          <Button
            href="/get-started"
            className="bg-blue-600 w-[200px] h-[52px] text-white px-8 py-3 rounded-full font-bold transition duration-300 hover:bg-blue-700"
          >
            Get started →
          </Button>
        </div>
        <div className="flex justify-center max-md:justify-center max-md:ml-[10%] max-md:items-center md:w-1/2">
          <div
            className="relative w-[70%] max-md:mr-[20%] max-w-xs md:max-w-md lg:max-w-lg"
            data-aos="zoom-in"
          >
            <Image
              src={heroImage}
              data-aos="zoom-in"
              data-aos-duration="3000"
              alt="User on Instagram"
              className="w-full  object-cover h-full"
            />
            <div className="absolute  top-[9%] left-[-10%]">
              <Image
                src={Icon}
                data-aos="zoom-in"
                data-aos-duration="2000"
                alt="User on Instagram"
                className="w-[70%]   object-cover h-full"
              />
            </div>
            <div className="absolute  top-[-5%] right-[-30%]">
              <Image
                src={Icons}
                data-aos="zoom-in"
                data-aos-duration="2000"
                alt="User on Instagram"
                className="w-[70%] max-md:w-[85%] object-cover h-full"
              />
            </div>
            <div className="absolute  bottom-[-10%] left-[-55%] max-md:bottom-[-19%] max-md:left-[-35%]">
              <Image
                src={Notifications}
                data-aos="zoom-in"
                data-aos-duration="2000"
                alt="User on Instagram"
                className="w-[80%] max-md:w-[85%]  object-cover h-full"
              />
            </div>
            <div className=" twoNotifications absolute  bottom-[-15%] right-[-65%]">
              <Image
                src={twoNotifications}
                data-aos="zoom-in"
                data-aos-duration="2000"
                alt="User on Instagram"
                className="w-[70%] max-md:w-[80%]  object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
