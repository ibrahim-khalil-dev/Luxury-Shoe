import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Collections" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Unique Designs" },
  { value: "500+", label: "Trusted Retailers" },
  { value: "250k+", label: "Satisfied Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Stride Runner X1",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "AeroKick Prime",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "EdgeMax 300",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "FlexSport Ultra",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free Shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to Help You",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Stride Runner X1", link: "/" },
      { name: "AeroKick Prime", link: "/" },
      { name: "EdgeMax 300", link: "/" },
      { name: "TrailForce 2.0", link: "/" },
      { name: "CityStep Racer", link: "/" },
      { name: "FlexLite Pro", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "ggxehc@gmail.com", link: "mailto:ggxehc@gmail.com" },
      { name: "+92 03108687003", link: "tel:+923108687003" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
