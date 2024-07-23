const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Setting Up MediaBeaker",
      description:
        "After signing up for your subscription, all you have to do is set up MediaBeaker by connecting your account. Then, let our algorithm do the magic. We will analyze successful competitors, setting up an account base that mirrors theirs.",
      bgColor: "bg-purple-200 text-purple-800",
    },
    {
      number: "2",
      title: "Automatic & natural interaction",
      description:
        "Our advanced AI will interact with targeted accounts and likes to help your account get discovered and activated. We work by mimicking human actions with the daily limits Instagram allows us to operate within.",
      bgColor: "bg-blue-200 text-blue-800",
    },
    {
      number: "3",
      title: "Watch your account grow",
      description:
        "See your following skyrocket and grow. You will have detailed analytics on all the new followers you have gained, how many followbacks occurred, and where your biggest sources of new followers reside. This measured approach ensures you grow an authentic audience.",
      bgColor: "bg-green-200 text-green-800",
    },
  ];

  return (
    <section className="bg-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold">How it works</h2>
          <p className="text-gray-700">
            Innovative and tailored solutions designed to meet your unique needs
            and bring your success.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="zoom-in"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md flex flex-col items-start"
            >
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-full mb-4 ${step.bgColor}`}
              >
                <span className="text-lg font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
