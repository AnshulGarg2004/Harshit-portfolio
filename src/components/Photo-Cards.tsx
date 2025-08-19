'use client'
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/photo-cards";

const testimonials = [
  {
    quote: "",
    name: "",
    title: "",
    image: "https://content.jdmagicbox.com/comp/def_content/waste-disposal-services/1-waste-disposal-services-1-fo2dg.jpg", // make sure this image exists in public folder
  },
  {
    quote: "",
    name: "",
    title: "",
    image: "https://content.jdmagicbox.com/comp/def_content/waste-disposal-services/10-waste-disposal-services-10-yadac.jpg",
  },
  {
     quote: "",
    name: "",
    title: "",
    image: "https://www.analytik-jena.com/fileadmin/content/industries/environmental/iStock-Muellkippe_Sonnenuntergang_vchal-waste-840623304.jpg",
    
  },
    {
     quote: "",
    name: "",
    title: "",
    image: "https://s3.eu-central-1.amazonaws.com/weka-alps-media/media/wasteManagementWorld/_1200x630_crop_center-center_82_none/AdobeStock_273324361.jpeg?mtime=1715679841",
    
  },
];

const PhotoSlider = () => {
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

export default PhotoSlider;
