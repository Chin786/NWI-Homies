import React, { useState, useCallback } from "react";
import KitchenInterior from "../assets/10-kitchen-interior-design-ideas-modern-functional-space-1.jpg";
import KitchenInterior1 from "../assets/acrylic-finishing-modular-kitchen-250x250-1.webp";
import KitchenInterior2 from "../assets/alberto-castillo-q-mx4mskk9zeo-unsplash-5.jpg";
import KitchenInterior3 from "../assets/cupboard-six-door.jpeg";
import KitchenInterior4 from "../assets/deborah-floden-hcvvx5xz0he-unsplash-5.jpg";
import KitchenInterior5 from "../assets/dressing-table-cupboard.jpeg";
import KitchenInterior6 from "../assets/g-shaped-trendy-kitchen-modular-design.webp";
import KitchenInterior7 from "../assets/ialicante-mediterranean-homes-2d4laqalbda-unsplash-5.jpg";
import KitchenInterior8 from "../assets/ialicante-mediterranean-homes-fqqiavjejto-unsplash-5.jpg";
import KitchenInterior9 from "../assets/kitchen-L-shape.jpeg";
import KitchenInterior10 from "../assets/naomi-hebert-mp0bgas_d1c-unsplash-5.jpg";
import KitchenInterior11 from "../assets/nastuh-abootalebi-rspmla5rita-unsplash-5.jpg";
import KitchenInterior12 from "../assets/sidekix-media-f1rd2hsoknk-unsplash-5.jpg";
import KitchenInterior13 from "../assets/steven-ungermann-d-zkucfjbww-unsplash-5.jpg";
import KitchenInterior14 from "../assets/three-door-cupboard.jpeg";
import KitchenInterior15 from "../assets/u-shaped-kitchen.jpeg";
import KitchenInterior16 from "../assets/whatsapp-image-2024-04-18-at-12.52.56-pm-1.jpeg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ChefHat, Heart, Home, Users, PenTool as Tool } from "lucide-react";

const imageList = [
  KitchenInterior,
  KitchenInterior6,
  KitchenInterior15,
  KitchenInterior16,
  KitchenInterior1,
  KitchenInterior9,
  KitchenInterior10,
  KitchenInterior8,
  KitchenInterior12,
  KitchenInterior14,
  KitchenInterior3,
  KitchenInterior5,
  KitchenInterior11,
  KitchenInterior4,
  KitchenInterior2,
  KitchenInterior13,
  KitchenInterior7,
];
const Portfolio: React.FC = () => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // Open image modal
  const handleImageClick = useCallback((index: number) => {
    console.log("Opening modal for index:", index); // Debug log
    setModalIndex(index);
  }, []);
  // Close image modal
  const handleCloseModal = useCallback(() => {
    console.log("Closing modal");
    setModalIndex(null);
  }, []);

  // Previous image
  const handlePrevImage = useCallback(() => {
    if (modalIndex !== null) {
      setModalIndex((prev) => (prev === 0 ? imageList.length - 1 : prev! - 1));
    }
  }, [modalIndex]);

  // Next image
  const handleNextImage = useCallback(() => {
    if (modalIndex !== null) {
      setModalIndex((prev) => (prev === imageList.length - 1 ? 0 : prev! + 1));
    }
  }, [modalIndex]);

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
          PRODUCTES
        </h2>
        {/* Products & Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 dark:text-white">
            Our Products & Services
          </h3>
          <div className="relative">
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition w-[300px]">
                  <ChefHat className="w-12 h-12 text-yellow-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">
                    Modular Kitchens
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Stylish, durable, and highly functional kitchen solutions.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition w-[300px]">
                  <Home className="w-12 h-12 text-yellow-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">
                    Wardrobes
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Space-efficient and customizable wardrobe designs.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition w-[300px]">
                  <Tool className="w-12 h-12 text-yellow-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">
                    Doors
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    High-quality Wooden/Flush/Panel/Wire Mesh Doors.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition w-[300px]">
                  <Heart className="w-12 h-12 text-yellow-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">
                    Vanity Units
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Premium vanities designed for modern bathrooms.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition w-[300px]">
                  <Users className="w-12 h-12 text-yellow-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">
                    Office Furniture
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Modern, aesthetic and designer furniture for productive
                    office environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Design Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-yellow-300 max-w-2xl mx-auto">
            Transform your space with our professional design services
          </p>
        </div>
        <div className="relative">
          <div className="overflow-x-auto hide-scrollbar">
            <div
              className="flex gap-6 pb-4  bg-gray-75"
              style={{ width: "max-content" }}
            >
              {imageList.map((img, index) => (
                <div
                  key={index}
                  className="relative border-4 p-4 rounded-xl shadow-lg   hover:shadow-xl transition border-gray-300 w-[350px] overflow-hidden group"
                >
                  <img
                    src={img}
                    alt={`Kitchen Design ${index + 1}`}
                    className="w-full h-80 object-cover rounded-4 transform group-hover:scale-110 transition duration-500 cursor-pointer"
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {modalIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="inset-0 bg-black bg-opacity-80 rounded-lg w-full max-w-full h-[750px] flex flex-col relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition"
              >
                <X className="w-6 h-6 text-gray-50 hover:text-black" />
              </button>
              <img
                src={imageList[modalIndex]}
                alt={`Kitchen Design ${modalIndex + 1}`}
                className="w-full h-full object-contain"
              />
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-700 rounded-full"
              >
                <ChevronLeft className="w-6 h-6 dark:text-white" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-700 rounded-full"
              >
                <ChevronRight className="w-6 h-6 dark:text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
