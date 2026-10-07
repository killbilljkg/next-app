import Cards from "./Home/Cards";
import Hero from "./Home/Hero/Hero";
import KeyProducts from "./Home/KeyProducts/KeyProducts";
import Leadership from "./Home/Leadership/Leadership";
import Numbers from "./Home/Numbers/Numbers";
import Partners from "./Home/Partners/Partners";
import PartnersTestimonials from "./Home/Testimonials/PartnersTestimonials";


export default function Home() {
  return (
    <>
    <Hero />
    <KeyProducts />
    <Numbers />
    <Partners />
    <PartnersTestimonials />
    <Cards />
    <Leadership />
    </>
  );
}
