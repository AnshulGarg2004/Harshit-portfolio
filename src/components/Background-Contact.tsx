"use client";
import React from "react";
import { Boxes } from "./ui/background";
import { cn } from "@/lib/utils";
import ContactForm from "./Contact";

export default function BackgroundBoxes() {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center px-6 md:px-12 py-12">
      {/* Background Animation */}
      <Boxes />

      {/* Radial Mask for Soft Light */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-20 text-center md:text-left">
        {/* Left Text Content */}
        <div className="md:flex-1 max-w-md">
          <h1 className={cn("text-4xl md:text-5xl font-bold text-white mb-6")}>
            Get in Touch
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl">
            Have questions about our music programs or want to book a trial class? Send us a message!
          </p>
        </div>

        {/* Right Contact Form */}
        <div className="md:flex-1 w-full max-w-md">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
