'use client'
import React, { ReactNode } from "react";
import PhotoSlider from "./Photo-Cards";

interface DarkHorizonGlowWrapperProps {
    children: ReactNode;
}

const DarkHorizonGlowWrapper: React.FC<DarkHorizonGlowWrapperProps> = ({ children }) => {
    return (
        <div className="min-h-screen w-full relative">
            {/* Dark Radial Gradient Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
                }}
            />
            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

const JaunpurProject = () => {
    return (
        <DarkHorizonGlowWrapper>
            <div className="p-8 max-w-7xl mx-auto">
                {/* Main Title */}
                <h1 className="text-5xl font-bold mb-6 border-b-4 border-blue-500 text-white">
                    Jaunpur City Problem
                </h1>

                {/* Problem Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 border-l-4 border-blue-400 pl-4 text-white">
                        Waste Management Issues
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        Jaunpur suffers from irregular garbage collection, which leads to a significant accumulation
                        of waste in public spaces. This unmanaged waste contributes to environmental pollution and
                        creates serious health risks for residents, including increased cases of mosquito-borne diseases
                        like dengue and malaria. The lack of an efficient waste disposal system affects the city’s overall
                        cleanliness and quality of life.
                    </p>
                </section>

                <PhotoSlider />

                {/* Solution Section */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4 border-l-4 border-green-400 pl-4 text-white">
                        Proposed Solution
                    </h2>

                    <p className="text-lg leading-relaxed text-gray-300 mb-4">
                        Implementing a <strong>Smart Waste Management System</strong> leverages modern technology to tackle inefficiencies in current waste collection processes. By installing <strong>IoT-enabled garbage bins</strong> equipped with sensors, the system can automatically notify sanitation workers when bins are nearly full, enabling timely pickups and preventing overflow.
                        <br /><br />
                        Additionally, a <strong>mobile application for residents</strong> empowers the community to actively participate by reporting missed collections or requesting additional pickups, increasing transparency and responsiveness.
                        <br /><br />
                        Municipal authorities can benefit from a <strong>real-time data dashboard</strong> that aggregates information from all IoT bins, providing insights into waste accumulation patterns. This enables optimized routing for garbage trucks, reducing fuel consumption and improving efficiency.
                        <br /><br />
                        Finally, running <strong>awareness and education campaigns</strong> encourages citizens to properly segregate waste, recycle where possible, and maintain cleanliness, fostering a community-driven effort towards a healthier environment. Together, these solutions can transform Jaunpur’s waste management into a sustainable, efficient, and community-supported system.
                    </p>

                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            Installing IoT-enabled garbage bins that notify sanitation workers when full to ensure timely collection.
                        </li>
                        <li>
                            Developing a mobile app for residents to report uncollected garbage and schedule pickups.
                        </li>
                        <li>
                            Creating a real-time data dashboard for municipal authorities to optimize waste collection routes.
                        </li>
                        <li>
                            Conducting awareness campaigns to educate citizens on proper waste segregation and disposal.
                        </li>
                    </ul>
                </section>
            </div>
        </DarkHorizonGlowWrapper>
    );
};

export default JaunpurProject;
