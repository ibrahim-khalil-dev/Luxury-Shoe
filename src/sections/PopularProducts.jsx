import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopularProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5" data-aos="fade-up">
        <h2 className="text-5xl font-bold max-sm:text-3xl">
          Our <span className="text-[#FF6452]">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 text-[#6D6D6D] max-sm:text-sm">
          Experience top-notch quality Lorem ipsum, dolor sit amet consectetur
          adipisicing.
        </p>
        <div
          className="mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-10"
          data-aos="fade-up"
        >
          {products.map((product) => (
            <div key={product.name} data-aos="zoom-in-up">
              <PopularProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
