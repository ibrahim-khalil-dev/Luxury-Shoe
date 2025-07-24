import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="max-container justify-center flex flex-wrap gap-9">
      {services.map((service, index) => (
        <div key={service.label} data-aos="fade-up" data-aos-delay={index * 100}>
          <ServiceCard {...service} />
        </div>
      ))}
    </section>
  );
};

export default Services;
