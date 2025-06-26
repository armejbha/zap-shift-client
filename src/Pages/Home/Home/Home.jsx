import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import ServicesSection from "../Services/ServicesSection";
import ClientLogoSlider from "../ClientLogoSlider/ClientLogoSlider";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <ClientLogoSlider></ClientLogoSlider>
    </div>
  );
};

export default Home;
