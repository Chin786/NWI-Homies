import React, { useState, useEffect } from "react";
import img1 from "../assets/nastuh-abootalebi-rspmla5rita-unsplash-5.jpg";
import img2 from "../assets/new-images/greencupboard.jpg";
import img3 from "../assets/g-shaped-trendy-kitchen-modular-design.webp";

function Hero() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="home"
      className="relative min-h-[600px] pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-t text-black dark:text-gray-300 bg-[#d3d2d2] dark:bg-black/50 backdrop-blur-sm"

      // className="relative  bg-gradient-to-t   from-stone-900 to-black h-screen pt-16"
    >
      {/* Backgroer */}
      {/* <div className="absound Image Slidlute inset-0 bg-black opacity-60  overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Kitchen Design ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div> */}

      {/* Content */}
      <div className="flex flex-col justify-between md:flex-row md:items-center min-h-[500px]">
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-gray-300 mb-6">
            NEELKANTH <b className="text-red-700">WOOD</b> INDUSTRIES
          </h1>
          <p className="text-xl md:text-2xl text-black dark:text-gray-300 mb-8 max-w-2xl">
            Where family bonds strengthen over delicious meals in beautifully
            designed spaces
          </p>
          <div>
            <h1 className="text-2xl text-red-400 md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Luxurious &<br />
              Environmentally Conscious
              <br />
              Home.
            </h1>
            <p className="text-sm text-black dark:text-gray-300 md:text-base  lg:text-lg">
              Extensive upgrades and thorough maintenance have kept the home in
              prime condition. Classic renovations and aesthetic design create a
              warm, comfortable living space.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex  justify-center items-center  rounded-lg p-4">
          <div className="relative w-full h-[550px]  flex justify-center items-center">
            {images.map((image, index) => {
              const isActive = index === currentIndex;
              const isNext = index === (currentIndex + 1) % images.length;
              const isPrev =
                index === (currentIndex - 1 + images.length) % images.length;

              return (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`absolute transition-all duration-1000 rounded-lg
              ${
                isActive
                  ? "z-20 w-[450px] h-[400px] border-4 border-yellow-400 scale-100 opacity-100 shadow-2xl"
                  : ""
              }
              ${
                isNext
                  ? "z-10 w-[450px] h-[250px] border-4 border-red-800 opacity-80 translate-x-12 shadow-md"
                  : ""
              }
              ${
                isPrev
                  ? "z-10 w-[450px] h-[250px] border-4 border-red-800 opacity-80 -translate-x-12 shadow-md"
                  : ""
              }
            `}
                  style={{ transitionTimingFunction: "ease-in-out" }}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="flex gap-4">
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Get Started
          </button>
        </div> */}
    </header>
  );
}

export default Hero;
