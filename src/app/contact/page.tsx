
import BackgroundBoxes from "@/components/Background-Contact";
import ContactPage from "@/components/Contact";
import { NavbarDemo } from "@/components/Navbar";
// import WorldMapDemo from "@/components/World-Map";

export default function H() {
    return (
        <>
        <div className="fixed top-2 left-0 right-0 z-50">
                <NavbarDemo />
              </div>
            <div className="dark bg-black text-white w-full h-full">
                <BackgroundBoxes />
            </div>
            </>
        );
    }

