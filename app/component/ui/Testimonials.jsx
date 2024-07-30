import Image from "next/image";

// Testimonial Component
const Testimonial = ({ imageSrc, text }) => (
  <div className="flex items-center justify-center bg-gray-100 p-2 rounded-lg shadow-lg w-[250px] h-[63px]">
    <Image
      className="rounded-full w-8 h-8 object-cover"
      alt="User"
      width={100}
      height={100}
      src={imageSrc}
    />
    <div className="ml-2 flex-1">
      <p className="text-gray-800 whitespace-normal text-[12px]">{text}</p>
    </div>
  </div>
);

// TestimonialSlider Component
const TestimonialSlider = () => {
  return (
    <section className="bg-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <p className="text-gray-700">
            Innovative and tailored solutions designed to meet your unique needs
            and bring your success.
          </p>
        </div>
        <div className="relative">
          {/* First Slider (Left to Right) */}
          <div className="overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee-fast">
              {/* Content is duplicated to ensure seamless scrolling */}
              <div className="flex flex-nowrap space-x-5 mb-5">
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jack"
                  text="I've never seen anything like this before. It's amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jill"
                  text="I don't know what to say. I'm speechless. This is amazing."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/john"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                {/* Repeat testimonials */}
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jack"
                  text="I've never seen anything like this before. It's amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jill"
                  text="I don't know what to say. I'm speechless. This is amazing."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/john"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
              </div>
              {/* Content is duplicated for seamless loop */}
              <div className="flex flex-nowrap space-x-4">
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jack"
                  text="I've never seen anything like this before. It's amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jill"
                  text="I don't know what to say. I'm speechless. This is amazing."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/john"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                {/* Repeat testimonials */}
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jack"
                  text="I've never seen anything like this before. It's amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jill"
                  text="I don't know what to say. I'm speechless. This is amazing."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/john"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
              </div>
            </div>
          </div>
          {/* Second Slider (Right to Left) */}
          <div className="mt-6 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee-reverse-fast">
              {/* Content is duplicated to ensure seamless scrolling */}
              <div className="flex flex-nowrap space-x-5 mb-5">
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jane"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jenny"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/james"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                {/* Repeat testimonials */}
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jane"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jenny"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/james"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
              </div>
              {/* Content is duplicated for seamless loop */}
              <div className="flex flex-nowrap space-x-4">
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jane"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jenny"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/james"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                {/* Repeat testimonials */}
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jane"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/jenny"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
                <Testimonial
                  imageSrc="https://avatar.vercel.sh/james"
                  text="I'm at a loss for words. This is amazing. I love it."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
