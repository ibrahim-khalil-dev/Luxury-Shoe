import Button from "./../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  });
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3
        className="text-5xl font-bold leading-normal max-sm:text-3xl"
        data-aos="fade-right"
      >
        Sign Up For <span className="text-[#FF6452]">Updates</span> <br /> And
        Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 padding-ii sm:border sm:border-[#6D6D6D] rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input"
          data-aos="fade"
        />
        <div
          className="flex max-sm:justify-end items-center max-sm:w-full"
          data-aos="fade"
        >
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
