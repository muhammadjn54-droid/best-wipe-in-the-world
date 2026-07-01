import React from "react";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function Articles() {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimation();
  const leftArticleRef = useScrollAnimation();
  const rightArticleRef = useScrollAnimation();

  return (
    <div
      ref={sectionRef}
      className="fade-in-on-scroll w-full bg-[#272727] text-white py-16 px-6 md:px-16 flex flex-col items-center"
    >
      <div className="w-full max-w-5xl border border-[#FCD34D]/40 p-8 md:p-12 mb-16 text-center relative animate-fade-in-up">
        <p className="text-lg md:text-xl font-light italic leading-relaxed text-gray-200">
          "Don't limit yourself. Many people limit themselves to what they think
          they can do. You can go as far as your mind lets you. What you
          believe, remember, you can achieve."
        </p>
        <span className="block mt-4 text-[#FCD34D] text-sm font-semibold uppercase tracking-wider">
          — Mary Kay Ash
        </span>
      </div>

      <div
        ref={leftArticleRef}
        className="fade-in-on-scroll w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
      >
        <div className="flex flex-col gap-6 animate-fade-in-up">
          <div className="w-full h-[280px] md:h-[320px] overflow-hidden rounded-sm bg-zinc-800 image-hover">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80"
              alt="Interior"
              className="w-full h-full object-cover transition duration-500"
            />
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-normal text-justify section-content">
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
            Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
            purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet
            purus, sit amet pellentesque neque sed id tortor. In egestas, erat a
            dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec
            tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc,
            feugiat placerat urna rutrum eget. Nullam mattis justo consequat
            risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin
            at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque
            accumsan pretium tincidunt. Etiam viverra ultrices est vitae
            suscipit. Pellentesque elementum purus non nisl pharetra consequat.
            Nunc in venenatis orci.
          </p>
        </div>

        <div
          ref={rightArticleRef}
          className="fade-in-on-scroll flex flex-col gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="w-full h-[280px] md:h-[320px] overflow-hidden rounded-sm bg-zinc-800 image-hover">
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80"
              alt="Pool View"
              className="w-full h-full object-cover transition duration-500"
            />
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-normal text-justify section-content">
            Vivamus non diam vel lorem efficitur mattis in gravida ante. Ut
            ullamcorper dapibus ante, eu tincidunt orci feugiat vel. Curabitur
            eget lectus lectus. Pellentesque malesuada, felis at accumsan
            interdum, nisl mi fermentum est, ac suscipit dui lorem a dui.
            Aliquam rhoncus risus in leo vestibulum efficitur. Suspendisse
            tortor quam, faucibus a lacinia a, bibendum vitae quam. Suspendisse
            blandit in diam in rhoncus. Nam volutpat hendrerit enim, sed aliquet
            quam gravida at. Nullam dictum sagittis nisi, eu porta sem mollis
            eu. Nulla faucibus sed ipsum sed sodales. Curabitur varius iaculis
            felis, in aliquet sem suscipit quis. Ut vulputate, magna ac bibendum
            elementum, nulla magna tincidunt urna, a venenatis dolor arcu sed
            leo.
          </p>
        </div>
      </div>
    </div>
  );
}
