import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans selection:bg-[#E3F245] selection:text-black">
      
      {/* 500vh container for scrollytelling */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      {/* Standard flow sections below */}
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Footer />
      
    </main>
  );
}
