import React from "react";
import { useTranslation } from "react-i18next";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import ContentPage from "./ContentPage";
import MethodsSection from "./MethodsSection";
import GallerySection from "./GallerySection";
import StatsAndContent from "./StatsAndContent";
import ContactUs from "./ContactUs";
import PricingTable from "./PricingTable";
import ServicesSection from "./ServicesSection";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute w-[95%] m-auto inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img8})`,
          }}
        />

        <div className="absolute inset-0 bg-black/50 "></div>
        <div className="relative z-10 flex mt-140  h-full">
          <div className="max-w-7xl mx-auto w-full px-8 md:px-20 flex flex-col justify-center">
            <p className="text-white text-sm uppercase tracking-[4px] mb-2 animate-fade-in-down">
              {t("aboutPage.rent")}
            </p>

            <h1
              className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight hero-title animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t("aboutPage.furnished_apartments")}
            </h1>

            <h2
              className="text-yellow-400 text-3xl md:text-5xl lg:text-6xl font-bold mt-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t("aboutPage.in_dubai")}
            </h2>
          </div>
        </div>
      </section>
      <ContentPage />
      <img
        className="w-[85%] m-auto animate-fade-in-up"
        src={img9}
        alt="DubaiRealty"
      />
      <MethodsSection />
      <GallerySection />
      <StatsAndContent />
      <ContactUs />
      <PricingTable />
      <ServicesSection />
    </>
  );
}
