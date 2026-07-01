import React from "react";
import { useTranslation } from "react-i18next";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CardSwiper from "./CardSwiper";
import Videos from "./Vidoes";
import Articles from "./Articles";
import Section from "./Section";
import UsefulArticles from "./UsefulArticles";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const HomePage = () => {
  const { t } = useTranslation();
  const heroTitleRef = useScrollAnimation();
  const heroSubtitleRef = useScrollAnimation({
    rootMargin: "0px 0px -100px 0px",
  });
  const expertiseRef = useScrollAnimation({ rootMargin: "0px 0px -100px 0px" });

  return (
    <div className="w-full bg-[#272727] min-h-[calc(100vh-73px)] relative overflow-hidden">
      <div className="bg relative w-full h-[85vh]">
        {/* Social Icons */}
        <div className="absolute right-12 top-12 flex flex-col gap-5 z-40">
          <FacebookIcon
            className="!text-[22px] social-icon animate-fade-in"
            style={{ animationDelay: "0s" }}
          />
          <TwitterIcon
            className="!text-[22px] social-icon animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          />
          <YouTubeIcon
            className="!text-[22px] social-icon animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          />
          <InstagramIcon
            className="!text-[22px] social-icon animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          />
          <LinkedInIcon
            className="!text-[22px] social-icon animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        {/* Hero Section */}
        <div
          ref={heroTitleRef}
          className="fade-in-on-scroll absolute left-16 md:left-28 top-[22%] pl-10 py-8 max-w-2xl select-none z-30"
        >
          <div className="absolute left-0 top-0 w-16 h-[2px] bg-[#FCD34D] animate-fade-in"></div>
          <div
            className="absolute left-0 top-0 w-[2px] h-full bg-[#FCD34D] animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="absolute left-0 bottom-0 w-24 h-[2px] bg-[#FCD34D] animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          ></div>

          <p
            className="text-gray-300 text-xs uppercase tracking-[0.25em] mb-5 font-light animate-fade-in-down"
            style={{ animationDelay: "0.2s" }}
          >
            {t("homePage.hero_subtitle")}
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-[1.15] tracking-wide mb-8 hero-title">
            {t("homePage.hero_title_1")} <br />
            <span className="text-[#FCD34D]">
              {t("homePage.hero_title_2")}
            </span>{" "}
            {t("homePage.hero_title_3")}
          </h1>

          <a
            href="#consultation"
            className="inline-flex items-center gap-2 text-white text-xs font-semibold hover:text-[#FCD34D] transition duration-300 uppercase tracking-widest hero-cta btn-hover-lift"
          >
            {t("homePage.book_consultation")}
            <span className="text-[#FCD34D] text-sm">➔</span>
          </a>
        </div>

        {/* Navigation Controls */}
        <div
          className="absolute left-16 md:left-28 bottom-10 text-xs font-semibold tracking-widest text-white/60 uppercase z-30 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="cursor-pointer hover:text-white transition duration-300">
            {t("homePage.prev")}
          </span>
          <span className="mx-4 text-white/20">|</span>
          <span className="cursor-pointer hover:text-white transition duration-300">
            {t("homePage.next")}
          </span>
        </div>

        {/* Stats Section */}
        <div className=" hidden lg:flex absolute right-0 bottom-0 w-[65%] max-w-[900px] bg-[#272727] grid grid-cols-3 py-7 px-10 border-t border-l border-gray-800/60 z-30">
          <div className="flex items-start gap-4 animate-fade-in-up">
            <span className="text-[#FCD34D] text-3xl font-bold leading-none">
              01
            </span>
            <div className="text-[11px] text-gray-400 tracking-wider uppercase">
              <p className="text-white font-medium mb-1">Lorem Ipsum</p>
              <p className="text-gray-500 normal-case">Dolorem upset</p>
            </div>
          </div>
          <div
            className="flex items-start gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-white text-3xl font-bold leading-none">
              02
            </span>
            <div className="text-[11px] text-gray-400 tracking-wider uppercase">
              <p className="text-white/80 font-medium mb-1">Lorem Ipsum</p>
              <p className="text-gray-500 normal-case">Dolorem upset</p>
            </div>
          </div>
          <div
            className="flex items-start gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-white text-3xl font-bold leading-none">
              03
            </span>
            <div className="text-[11px] text-gray-400 tracking-wider uppercase">
              <p className="text-white/80 font-medium mb-1">Lorem Ipsum</p>
              <p className="text-gray-500 normal-case">Dolorem upset</p>
            </div>
          </div>
        </div>
      </div>

      <CardSwiper />

      {/* Expertise Section */}
      <div
        ref={expertiseRef}
        className="fade-in-on-scroll flex flex-col m max-w-2xl px-8 py-16 bg-[#272727] text-white"
      >
        <span className="text-[#FCD34D] text-xs font-semibold tracking-widest uppercase block mb-6 animate-fade-in">
          {t("homePage.our_expertise")}
        </span>

        <h2 className="text-4xl md:text-5xl font-bold tracking-wide leading-tight mb-6 section-heading">
          {t("homePage.dream_title")}
        </h2>

        <p className="text-xs text-gray-400 leading-relaxed font-normal section-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta
          volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec
          viverra orci tristique vel. In efficitur vehicula magna, varius
          pellentesque nisi vehicula vel. Aenean vel sem ac elit commodo finibus
          in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin.
          Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor.
          Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa.
          Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec
          neque vitae dolor dapibus elementum. Maecenas nec orci quis sem
          condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>

      <Videos />
      <Articles />
      <Section />
      <UsefulArticles />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default HomePage;
