import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { arrowRight } from "../assets/icons";
import Button from "./../components/Button";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        {/* LEFT SECTION */}
        <div
          className="relative xl:w-2/5 z-1 flex flex-col justify-center items-start w-full mt-10 padding pt-28"
          data-aos="fade-right"
        >
          <p className="text-xl text-[#FF6452] max-sm:text-lg">
            Introducing Our Summer Collection
          </p>

          <h1 className="mt-10 text-7xl font-bold max-sm:text-4xl max-sm:leading-[48px] capitalize">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-5 pr-10">
              Elevate Your Style
            </span>
            <br />
            <span className="text-[#FF6452] inline-block mt-3">
              with branded
            </span>{" "}
            Shoes
          </h1>

          <p className="text-slate-500 text-lg mt-6 mb-14 sm:max-w-sm max-sm:text-base max-sm:mb-10">
            Explore the latest drops in sneakers designed for style and
            performance.
          </p>

          <div className="max-sm:w-full">
            <Button label="Explore Now" iconUrl={arrowRight} />
          </div>

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-10 max-sm:gap-6">
            {statistics.map((stat) => (
              <div
                key={stat.label}
                className="max-sm:text-center max-sm:flex-1"
                data-aos="fade-up"
              >
                <p className="text-4xl font-bold max-sm:text-2xl">
                  {stat.value}
                </p>
                <p className="leading-7 text-slate-500 max-sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          className="relative flex-1  flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center max-sm:flex-col max-sm:py-10 max-sm:px-4"
          data-aos="zoom-in"
        >
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={500}
            className="object-contain relative z-10 max-sm:w-[90%]"
          />

          <div className="flex sm:gap-6 gap-4 bottom-shoeCard sm:left-[10%] max-sm:static max-sm:mt-8 max-sm:justify-center">
            {shoes.map((shoe) => (
              <div key={shoe.bigShoe} data-aos="fade-up" className="z-10">
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
