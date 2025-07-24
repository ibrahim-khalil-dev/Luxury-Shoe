import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container px-4 overflow-hidden">
      {/* IMAGE SECTION */}
      <div className="flex justify-center" data-aos="fade-right">
        <img
          src={offer}
          alt="offer"
          className="object-contain w-[600px] h-[auto] max-sm:w-full max-sm:h-auto"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="flex flex-1 flex-col" data-aos="fade-left">
        <h2 className="text-5xl font-bold capitalize lg:max-w-lg max-sm:text-3xl">
          <span className="text-[#FF6452]">Special </span>
          Offer
        </h2>

        <p className="mt-4 text-[18px] text-[#6d6d6d] max-sm:text-sm">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="mt-6 lg:max-w-lg text-[18px] text-[#6d6d6d] max-sm:text-sm">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 flex gap-5 max-sm:flex-col max-sm:w-full">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-[#6D6D6D]"
            textColor="text-[#6D6D6D]"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
