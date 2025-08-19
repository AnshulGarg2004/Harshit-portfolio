"use client";
import { TextGenerateEffect } from "./ui/text-generate";

const words = `Skilled in building and deploying ML models with Python and popular
              frameworks. Experienced in data preprocessing, model training, and
              evaluation. Passionate about applying machine learning to solve
              real-world problems.`;

export function TextGeneratedEffect() {
  return <TextGenerateEffect words={words} />;
}
