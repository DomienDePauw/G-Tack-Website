import React, { useState, useEffect } from "react";
import image1 from "../assets/images/thumbnail_visitekaartje.jpg";
import image2 from "../assets/images/thumbnail_IMG_9489.jpg";
import image3 from "../assets/images/thumbnail_IMG_9368.jpg";

const IntroSection = () => {
  const images = [image1,image2,image3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="intro"
      className="flex flex-row items-center px-8 py-20"
    >
      <div className="w-1/2">
        <h2 className="text-7xl font-synemono mb-10 px-8 text-black-600">
          Tack Goretti
        </h2>
        <p className="text-2xl text-black-200 px-8 font-synemono">
          (H)eerlijke lokale creatieve catering op maat gebracht, we willen bijdragen aan een gezonde en duurzame toekomst.
        </p>
      </div>
      
      <div className="w-1/2 flex px-8 items-center justify-center">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="rounded-2xl shadow-2xl w-full h-80 object-cover"
        />
      </div>
    </section>
  );
};

export default IntroSection;
