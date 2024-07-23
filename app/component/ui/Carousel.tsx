import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-50 flex justify-center items-center py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          The ideal solution for Your Product
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          By choosing MediaBear to find the ideal subscribers, you are sure to
          be able to offer your services/products to the right people.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Get started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
