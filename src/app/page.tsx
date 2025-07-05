import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Partners from "@/components/Partners/Partners";
import Process from "@/components/Process/Process";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyUs from "@/components/WhyUs/WhyUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WealthSetu - Your Financial Journey Starts Here",
  description: "WealthSetu - Your Financial Journey Starts Here",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Partners />
      <Footer />
    </>
  );
}
