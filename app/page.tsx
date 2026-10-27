import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDivider";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />

      {/* navy → paper */}
      <SectionDivider
        from="#06152E"
        layers={["#102A56", "#3D5A88", "#A8B6CC", "#FBFAF7"]}
      />

      <About />

      {/* paper → navy */}
      <SectionDivider
        from="#FBFAF7"
        layers={["#D4D8D2", "#8FA4BE", "#3D5A88", "#06152E"]}
      />

      <Services />

      {/* navy → cream */}
      <SectionDivider
        from="#06152E"
        layers={["#102A56", "#3D5A88", "#B5B5A7", "#F5F1EA"]}
      />

      <Process />

      {/* cream → paper */}
      <SectionDivider
        from="#F5F1EA"
        layers={["#EFE9DC", "#F2EDE0", "#FBFAF7", "#FBFAF7"]}
        height={20}
        viewBoxHeight={100}
      />

      <WhyUs />

      {/* paper → navy */}
      <SectionDivider
        from="#FBFAF7"
        layers={["#D4D8D2", "#8FA4BE", "#3D5A88", "#06152E"]}
      />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );
}
