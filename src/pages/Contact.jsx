import { Route } from "react-router-dom";
import React, { useRef, useState } from "react";

const jdSocialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/jdproductionz4L/",
    color: "bg-blue-600",
  },
  {
    name: "X",
    link: "https://x.com/productuinz_jd",
    color: "bg-blue-400",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jd.productionz/",
    color: "bg-pink-500",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@jdproductionz4430",
    color: "bg-red-600",
  },
];

const pftSocialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/1AFfFNCdpt/?mibextid=wwXIfr",
    color: "bg-blue-600",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/pftrecords/",
    color: "bg-pink-500",
  },
];

const videos = [
  {
    id: 1,
    src: "/assets/videos/SY_2024.mp4",
    description: "Experience the future",
  },
  {
    id: 2,
    src: "/assets/videos/Mustang_EcoBoost_ForSale_2016.mp4",
    description: "A sleek and powerful Mustang EcoBoost.",
  },
  {
    id: 3,
    src: "/assets/videos/HORIZONTAL_1.mp4",
    description: "A cinematic journey through the way of Salsa.",
  },
];

const Contact = () => {
  return (
    <section className="pt-80 sm:pt-44 py-[250px] px-10 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        Contact Us
      </h1>

      {/* Social Media Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* JDProductionz Social Media */}
        <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            JDProductionz Social Media
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {jdSocialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center p-4 rounded-lg bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 hover:from-cyan-500 hover:to-purple-600 hover:scale-105 transition-transform shadow-md`}
              >
                <span className="text-cyan-300 text-lg font-bold hover:text-white">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* PFT Social Media */}
        <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            PFT Social Media
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {pftSocialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center p-4 rounded-lg bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 hover:from-cyan-500 hover:to-purple-600 hover:scale-105 transition-transform shadow-md`}
              >
                <span className="text-cyan-300 text-lg font-bold hover:text-white">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
