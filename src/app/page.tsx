import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </>
  );
}
