"use client";
import Image from "next/image";
import { NavbarDemo } from "@/components/Navbar";
// import { WobbleCardDemo } from "@/components/Projects";
import { TextGeneratedEffect } from "@/components/Text-generate";
import { InfiniteMovingCards } from "@/components/ui/moving-cards";
// import { Highlight } from "@/components/Projects";
import ProjextSlider from "@/components/Project-Slider";

export default function Home() {
  const testimonials = [
    {
      quote:
        "C++ is a high-performance programming language widely used for system-level programming, competitive coding, and real-time applications. Its speed and control over system resources make it a great choice for building efficient machine learning libraries and back-end logic.",
      name: "C++",
      title: "",
    },
    {
      quote:
        "Machine Learning (ML) is a subset of AI that focuses on building models that learn patterns from data and make predictions or decisions without being explicitly programmed. It powers applications like recommendation systems, fraud detection, and speech recognition.",
      name: "Machine Learning",
      title: "",
    },
    {
      quote:
        "Deep Learning is a specialized field of machine learning that uses artificial neural networks to model complex patterns in data. It excels at tasks like image classification, natural language processing, and autonomous systems.",
      name: "Deep Learning",
      title: "",
    },
    {
      quote:
        "PyTorch is an open-source deep learning framework developed by Meta (Facebook). It’s known for its dynamic computation graph and flexibility, making it a favorite among researchers and developers for building and experimenting with deep learning models.",
      name: "PyTorch",
      title: "",
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#0d1a36] to-black">
      {/* Background Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
        }}
      />

      {/* Navbar */}
      <div className="fixed top-2 left-0 right-0 z-50">
        <NavbarDemo />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 px-4 pt-32 pb-12 w-full max-w-6xl flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          {/* Text */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-blue-500">
              Harshit Gupta
            </h1>
            <h3 className="text-xl font-mono text-gray-300">ML Researcher</h3>
            <TextGeneratedEffect />
          </div>

          {/* Profile Image */}
          <div className="relative w-55 h-55 md:w-64 md:h-64">
            <Image
              src="/images/gupta.jpeg"
              alt="Harshit Gupta"
              fill
              className="rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Skills */}
        <h1 className="text-white text-3xl text-center font-semibold my-10">
          Skills
        </h1>
        <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />

        {/* Projects */}
        <h1 className="text-white text-3xl text-center font-semibold my-10">
          My Projects
        </h1>
        {/* <WobbleCardDemo /> */}
        {/* <Highlight>
          <img src="/images/Foodvision.jpeg" alt="Food vision" />
          <img src="/images/Iris.jpeg" alt="iris" />
          <img src="/images/Sentiment.jpeg" alt="sentiment" />
        </Highlight> */}
        <ProjextSlider/>
        {/* <CarouselDemo/> */}

        {/* Footer */}
        <footer className="w-full bg-black text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 flex justify-center">
            <p className="text-lg text-gray-400 text-center">
              &copy; 2025 Harshit Gupta. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
