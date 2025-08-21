'use client'
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/photo-cards";

const testimonials = [
  {
    quote: "",
    name: "",
    title: "",
    image: "/images/Foodvision.jpeg", // make sure this image exists in public folder
  },
  {
    quote: "",
    name: "",
    title: "",
    image: "/images/Iris.jpeg",
  },
  {
     quote: "",
    name: "",
    title: "",
    image: "/images/Sentiment.jpeg",
    
  },

];

const ProjextSlider = () => {
  return (
    <div className="p-8">
      {/* <h1 className="mb-6 text-3xl font-bold"></h1> */}
      <InfiniteMovingCards
        items={testimonials}
        direction="right" // or "right"
        speed="fast" // "fast" | "normal" | "slow"
        pauseOnHover={true}
        className="my-custom-class" // optional additional styling
      />
    </div>
  );
};

export default ProjextSlider;
