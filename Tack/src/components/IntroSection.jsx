import React, { useState, useEffect } from "react";
import image1 from "../assets/images/thumbnail_visitekaartje.jpg";
import image2 from "../assets/images/thumbnail_IMG_9489.jpg";
import image3 from "../assets/images/thumbnail_IMG_9368.jpg";

const IntroSection = () => {
  const images = [image1, image2, image3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="intro"
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20"
    >
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h2 className="text-7xl font-synemono mb-6 text-black-600">
          Tack Goretti
        </h2>
        <p className="text-2xl text-black-200 font-synemono mb-4">
          (H)eerlijke lokale creatieve catering op maat gebracht, we willen bijdragen aan een gezonde en duurzame toekomst.
        </p>
      </div>
      
      <div className="relative md:w-1/2 flex items-center justify-center">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="rounded-2xl shadow-2xl w-full h-80 object-cover transition-all duration-700 ease-in-out"
        />
      </div>
    </section>
  );
};

export default IntroSection;
