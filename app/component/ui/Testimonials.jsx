"use client";
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.",
    name: "HOLDEN CAULFIELD",
    title: "Senior Product Designer",
  },
  {
    quote:
      "Sustainable gastropub enamel pin 8-bit, echo park beard knausgaard four loko DIY edison bulb. Asymmetrical kitsch typewriter, 90's tofu semiotics tousled kinfolk bespoke. Echo park helvetica cliche cred polaroid, chicharrones distillery intelligentsia four dollar toast hashtag air plant cronut.",
    name: "JANE DOE",
    title: "Marketing Specialist",
  },
  {
    quote:
      "Tote bag four loko beard, bicycle rights authentic knausgaard butcher kinfolk. PBR&B distillery biodiesel ramps live-edge cronut disrupt, sustainable subway tile adaptogen you probably haven't heard of them.",
    name: "JOHN SMITH",
    title: "Software Engineer",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto relative">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-gray-400 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed text-lg md:text-base sm:text-sm">
            {testimonials[currentIndex].quote}
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            {testimonials[currentIndex].name}
          </h2>
          <p className="text-gray-500">{testimonials[currentIndex].title}</p>
        </div>
        <button
          className="text-indigo-500 bg-white border-2 border-indigo-500 rounded-full h-12 w-12 flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 left-20 sm:left-10"
          onClick={prevTestimonial}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 sm:w-6 sm:h-6"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5-5 5-5v10z" />
          </svg>
        </button>
        <button
          className="text-indigo-500 bg-white border-2 border-indigo-500 rounded-full h-12 w-12 flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 right-20 sm:right-10"
          onClick={nextTestimonial}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 sm:w-6 sm:h-6"
            viewBox="0 0 20 20"
          >
            <path d="M10 5l5 5-5 5V5z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
