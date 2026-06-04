import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import whatsappClick from "../assets/icons8-whatsapp.json";

const WhatsAppButton = () => {
  const phoneNumber = "9811211683";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer"); // Update with your footer class
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setIsAtFooter(footerTop < windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <a
    //   href="https://wa.me/your-number"
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   className={`whatsapp-icon `}
    // >
    //   <img src="" alt="WhatsApp" />

    // </a>
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-icon ${
        isAtFooter ? "at-footer" : ""
      } text-white px-3 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition flex items-center gap-2`}
    >
      <Lottie animationData={whatsappClick} loop={true} />
    </a>
  );
};

export default WhatsAppButton;
