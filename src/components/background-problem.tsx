import React, { ReactNode } from "react";

interface DarkHorizonGlowWrapperProps {
  children: ReactNode;
}

const DarkHorizonGlowWrapper: React.FC<DarkHorizonGlowWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full relative bg-gradient-to-b from-gray-900 via-indigo-900 to-black">
      {/* Dark Horizon Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, rgba(0,0,0,0.8) 40%, #0d1a36 100%)",
          filter: "blur(60px)",
          opacity: 0.75,
        }}
      />
      {/* Content on top */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 text-white">
        {children}
      </div>
    </div>
  );
};

export default DarkHorizonGlowWrapper;
