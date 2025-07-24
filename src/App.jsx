import {
  Hero,
  SpecialOffer,
  PopularProducts,
  CustomerReviews,
  Subscribe,
  Footer,
  Services,
} from "./sections";
import Nav from "./components/Nav";

import "./index.css";
import SuperQuality from "./sections/SuperQuality";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-[#F5F6FF]">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="bg-black padding pb-8 pt-10 py-10">
        <Footer />
      </section>
    </main>
  );
};

export default App;
