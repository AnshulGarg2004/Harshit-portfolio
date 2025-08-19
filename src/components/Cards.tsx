"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

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
    quote: "Deep Learning is a specialized field of machine learning that uses artificial neural networks to model complex patterns in data. It excels at tasks like image classification, natural language processing, and autonomous systems.",
    name: "Deep Learning",
    title: "",
  },
  {
    quote:
      "PyTorch is an open-source deep learning framework developed by Meta (Facebook). It’s known for its dynamic computation graph and flexibility, making it a favorite among researchers and developers for building and experimenting with deep learning models.",name: "Pytorch",
    title: "",
  },
  
];
