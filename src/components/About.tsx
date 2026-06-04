import React, { useState } from "react";
import { Palette, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

import LivingRoom from "../assets/alberto-castillo-q-mx4mskk9zeo-unsplash-5.jpg";
import ModularKitchen from "../assets/u-shaped-kitchen.jpeg";
import Acrylic from "../assets/image copy.png";
import Internal from "../assets/new-images/close-door-image.jpg";
import RoomDoor from "../assets/new-images/internal-door.jpg";
import DoorImage from "../assets/new-images/double-hand-door.png";

function About() {
  const images = [Internal, DoorImage, RoomDoor];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "10K+",
      label: "Happy Customers",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "50+",
      label: "Design Awards",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      value: "100+",
      label: "Unique Designs",
    },
  ];
  return (
    <section id="about" className="py-20 px-6 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto ">
        {/* Company Introduction */}
        <div className=" max-w-6xl grid md:grid-cols-2 gap-12 bg-gray-75">
          <div className="mb-16  ">
            <h2 className="text-4xl font-bold text-center mb-10 dark:text-white">
              About Us
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Established in 2020, Neelkanth Wood Industries (registered
                trademark NWI Homes®) brings over 20 years of experience in
                Timber & Plywood to create exceptional modular kitchens,
                wardrobes, vanities, and premium furniture. Based in Mundka,
                Delhi, our state-of-the-art facility and highly trained team
                ensure precision, efficiency, and superior quality in every
                product we manufacture.
              </p>
              <p className="text-lg text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                We take pride in our strong industry collaborations as
                Authorized Channel Partners of leading brands including Kitply,
                Greenply, Archidply, Duroply, Hettich, Action Tesa, and Hafele.
                These partnerships enable us to deliver innovative and durable
                solutions for modern living spaces.
              </p>
              <div className="grid grid-cols-3 mb-12 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="inline-block p-2 rounded-full text-yellow-400 mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-white">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl mb-16 space-y-4">
            <img src={LivingRoom} alt="door-image" className=" h-fit w-fit" />
          </div>
        </div>
        {/* Modular kitchens*/}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl mb-16 space-y-4">
          <div className=" max-w-6xl gap-12 bg-gray-75">
            <img
              src={ModularKitchen}
              alt="door-image"
              className=" h-fit w-fit"
            />
          </div>

          <div className="container mx-auto py-12 ">
            {/* Added py-12 for vertical padding */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  text-red-500 dark:text-yellow-300">
              {/* First Column */}
              <div className="md:pr-6">
                <p className="text-lg font-medium mb-4">
                  Customized Kitchen Solutions
                </p>
                <p className=" text-gray-700 dark:text-gray-300">
                  We are providing customized solutions for modular kitchens
                  whether you are looking for laminate, acrylic, or any other
                  finish for your kitchens. NWI HOMES delivers all customized
                  designs to live the discerning tastes of esteemed homeowners.
                  Our kitchen solutions and wardrobes are a true testimony of
                  competent designers, talent, and teamwork.
                </p>
              </div>
              {/* Second Column */}
              <div className="md:px-6">
                {/* Added padding to the left and right on medium screens and larger */}
                <p className="text-lg font-medium mb-4">
                  Superior Quality & Range
                </p>
                <p className=" text-gray-700 dark:text-gray-300">
                  {/* Added basic styling */}
                  We are leading manufacturer and supplier of a superior and
                  qualitative range of Modular kitchen and Modular wardrobe. Our
                  range is designed to meet Indian lifestyles and living
                  standards. We are committed to adding fun to cooking by giving
                  a touch of elegance to the place.
                </p>
              </div>
              {/* Third Column */}
              <div className="md:pl-6">
                <p className="text-lg font-medium mb-4">Doors & Door Frames</p>
                <p className=" text-gray-700 dark:text-gray-300">
                  We are also leading manufacturer and supplier of a superior
                  and qualitative range of DOORS and Door frame. Our range is
                  designed to meet Indian lifestyles and living standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Image Column */}
            <div className="h-auto w-full max-w-[650px] rounded-xl overflow-hidden border border-gray-300 mb-6 md:mb-0">
              <img
                src={Acrylic}
                alt="Kitchen"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text Column */}
            <div className="md:pl-8 w-full">
              <p className="text-xl text-justify md:text-2xl font-bold text-red-500  dark:text-yellow-300 mb-4">
                NWI HOMES offer modular kitchen and wardrobe end-to-end
                solutions from innovative and aesthetic design to installation.
              </p>
              <p className="text-lg text-justify md:text-xl font-bold text-gray-700 dark:text-white">
                NWI HOMES also deals in Flush Door, Panel Door, Wire mesh Door,
                Chaukhat and Door frame. NWI HOMES offers a customizable and
                modern approach to home interiors.
              </p>
            </div>
          </div>
        </div>

        <div className=" relative container mb-8 mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Column */}
            <div className="md:pl-8 relative">
              <div className="pl-6">
                <p className="text-xl text-justify md:text-xl font-bold text-grey-600 dark:text-white mb-4">
                  NWI HOMES Doors are synonymous with qualities like Stability,
                  Safety & Longevity. Doors are built around a hardwood frame
                  with a special composite technology which is the secret to
                  their beautiful looks.
                </p>
              </div>
            </div>

            {/* Image Column */}
            {/* Image Stack with Hover Animation */}
            <div className="relative  flex justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative w-[250px] md:w-[300px] lg:w-[350px] h-[300px] transition-transform duration-500 rounded-lg shadow-lg
                ${
                  index === 0
                    ? "top-0 left-0"
                    : `top-${index * 1} left-${index * -1} right-${index * 2}`
                }
                ${
                  hoveredIndex === index
                    ? "scale-110 z-20 shadow-xl"
                    : "scale-100 "
                }`}
                  style={{
                    transform: `hover:translateY(${index * 10}px)`,
                    zIndex: hoveredIndex === index ? 20 : 10 - index,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={image}
                    alt="Kitchen"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Collaboration */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-12 rounded-2xl mt-20 mb-16">
          <div className="flex flex-col md:flex-row gap-6 md:gap-14">
            {/* Heading */}
            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              Industry Collaboration
            </h3>

            {/* Text Container */}
            <div className="md:pl-8 relative">
              {/* Vertical line indicator (left) */}
              <div className="absolute top-0 left-0 h-full w-[4px] bg-yellow-400 hidden md:block"></div>
              <p className="text-gray-700 text-justify dark:text-gray-300 text-lg md:ml-6">
                We take pride in our strong industry collaborations, enabling us
                to deliver high-quality and durable solutions for modern living
                spaces.
                <span className="font-semibold"> NWI HOMESR</span> is an
                Authorized Channel Partner of leading brands like{" "}
                <span className="text-red-600 font-bold">
                  KITPLY/ GREENPLY/ ARCHIDPLY/ DUROPLY/ HETTICH/ ACTION TESA AND
                  HAFELE.
                </span>{" "}
                Our strong collaboration with these industry leaders enables us
                to deliver high-quality, innovative, and durable solutions for
                modern living spaces.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-gray-50 text-center pt-8 dark:bg-gray-800 p-12 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">
            Our Mission & Vision
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At NWI Homes®, our mission is to provide top-notch, tailor-made home
            solutions that enhance aesthetics and functionality. We strive for
            continuous innovation, ensuring every product meets the highest
            industry standards while exceeding customer expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
