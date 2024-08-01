import Image from "next/image";
import Exceptional5 from "@/public/excepional5.png";
import Exceptional from "@/public/exceptional1.png";
import Exceptional2 from "@/public/exceptional2.png";
import Exceptional3 from "@/public/exceptional3.png";

const ExceptionalSolutions = () => {
  const solutionsData = [
    {
      srcI: Exceptional,
      height: "100%",
      width: "100%",
      title: "More subscribers, more customers In automatic",
      description:
        "Are you looking to expand your reach and convert more leads into loyal customers? Look no further! Our service is designed to automatically show your account to individuals who are already interested in what you offer.",
    },
    {
      srcI: Exceptional2,
      title: "Fast Results Guaranteed",
      description:
        "Avoid Bots and Fake Subscribers with AstraLemon, AstraLemon helps you grow your account with real followers who are genuinely interested in your content. Say goodbye to fake subscribers and hello to meaningful engagement and authentic growth.",
    },
    {
      srcI: Exceptional3,
      height: "100%",
      width: "100%",
      title: "Get Ahead of Your Competition",
      height: "50%",
      width: "100%",
      description:
        "AstraLemon empowers you to surpass your competitors by automating your interactions with prospects. Achieve greater visibility, increase your subscriber base, and convert more customers with minimal effort.",
    },
    {
      srcI: Exceptional5,
      height: "100%",
      width: "100%",
      title: "Real Followers, Real Interest",
      description:
        "Our cutting-edge algorithm engages with your competitors' subscribers, bringing them to your account faster than ever. Experience rapid growth as we help you capture the attention of a ready-made audience.",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Our Exceptional Solutions</h2>
          <p className="text-gray-700">
            Innovative and tailored solutions designed to meet your unique
            needs.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="zoom-in"
        >
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className="p-6 gap-4 border rounded-lg shadow-md flex flex-col items-start"
            >
              <div className="  w-full rounded-lg mb-4 object-fit">
                <Image
                  src={solution.srcI}
                  alt="Solution Image"
                  layout="responsive"
                  className="rounded-lg max-md:h-[300px] object-fit"
                />
              </div>
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExceptionalSolutions;
