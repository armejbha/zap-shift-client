import React from "react";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";
import Marquee from "react-fast-marquee";

const ClientLogoSlider = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  return (
    <section className="py-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        We've helped thousands of sales teams
      </h2>
      <Marquee direction="left" speed={40} gradient={false} pauseOnHover={true}>
        {logos.map((logo, idx) => (
          <div key={idx} className="mx-10">
            <img src={logo} alt="" className="h-8 w-auto object-contain" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientLogoSlider;
