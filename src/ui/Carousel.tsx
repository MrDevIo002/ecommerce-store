"use client";

import { useState } from "react";
import Image from "next/image";

import img1 from "../assets/img/1.webp";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.webp";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

const images = [img1, img2, img3, img4];

function Carousel() {
   const [current, setCurrent] = useState(0);

   const prevSlide = () => {
      setCurrent(current === 0 ? images.length - 1 : current - 1);
   };

   const nextSlide = () => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
   };

   return (
      <div className="w-full flex items-center justify-center gap-8">
         {/* Prev Button */}
         <button
            onClick={prevSlide}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
         >
            <MoveLeftIcon />
         </button>

         {/* Carousel */}
         <div className="w-full max-w-4xl overflow-hidden rounded-lg">
            <div
               className="flex transition-transform duration-500"
               style={{ transform: `translateX(-${current * 100}%)` }}
            >
               {images.map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                     <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full object-cover"
                        priority
                     />
                  </div>
               ))}
            </div>
         </div>

         {/* Next Button */}
         <button
            onClick={nextSlide}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
         >
            <MoveRightIcon />
         </button>
      </div>
   );
}

export default Carousel;
