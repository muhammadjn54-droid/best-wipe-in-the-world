import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function ContactPage() {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimation();

  return (
    <>
      <section
        ref={sectionRef}
        className="fade-in-on-scroll py-16 px-8 md:px-24"
      >
        <h2 className="text-3xl font-bold text-white mb-12 section-heading animate-fade-in-up">
          {t("contactPage.contact")}
        </h2>

        <div
          className="relative w-full h-[500px] animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <iframe
            className="w-full h-full rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1764350567265!2d55.20572767537963!3d25.19702217770308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b9b3a9a1d49%3A0x633d02a0a2569e5!2sDubai!5e0!3m2!1sen!2suae!4v1689255000000!5m2!1sen!2suae"
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>

          <div className="absolute top-10 left-10 bg-[#2D2D2D] p-10 w-[400px] text-white shadow-2xl animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-amber-500">
              {t("contactPage.address")}
            </h3>
            <p className="text-gray-300 mb-8">
              {t("contactPage.full_address")}
            </p>

            <div className="text-2xl font-bold mb-8">
              {t("contactPage.phone")}
            </div>

            <div className="space-y-4 text-sm">
              <p>
                <span className="text-gray-400">{t("contactPage.email")}:</span>{" "}
                {t("contactPage.email_address")}
              </p>
              <p className="text-gray-400">{t("contactPage.follow_us")}</p>
              <p>
                <span className="text-gray-400">
                  {t("contactPage.work_hours")}:
                </span>{" "}
                {t("contactPage.work_hours_time")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
