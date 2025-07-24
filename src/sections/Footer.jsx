import { useEffect } from "react";
import { copyrightSign } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants";
import { footerLogo } from "./../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  });
  return (
    <footer className="max-container " data-aos="fade-up">
      <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img src={footerLogo} alt="footerLogo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 text-white sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:text-[#6D6D6D]">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1  justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white text-2xl leading-normal font-medium">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-white text-base leading-normal hover:text-[#6D6D6D] cursor-pointer">
                    <a href={`#${link.name}`} key={link.name}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 items-center gap-2 cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
          />
          <p className="text-white text-base leading-normal cursor-pointer">
            Copyright. All rights reserved.
          </p>
        </div>
        <p className="text-white text-base leading-normal cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
