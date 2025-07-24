import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SuperQuality = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container overflow-x-hidden"
    >
      {/* LEFT TEXT SECTION */}
      <div className="flex flex-1 flex-col" data-aos="fade-right">
        <h2 className="text-5xl font-bold capitalize lg:max-w-lg max-sm:text-3xl">
          We Provide You
          <span className="text-[#FF6452]"> Super </span>
          <span className="text-[#FF6452]"> Quality </span>
          Shoes
        </h2>

        <p className="mt-4 text-[18px] text-[#6d6d6d] lg:max-w-lg max-sm:text-sm">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 lg:max-w-lg text-[18px] text-[#6d6d6d] max-sm:text-sm">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11 max-sm:mt-8">
          <Button label="View Details" />
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div
        className="flex-1 flex justify-center items-center"
        data-aos="fade-left"
      >
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain max-sm:w-[100%]"
        />
      </div>
    </section>
  );
};
  
export default SuperQuality;
