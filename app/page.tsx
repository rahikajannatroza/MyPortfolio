"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-[#000319]  flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 font-normaltext">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />

        <RecentProjects />

        <Footer />
      </div>
    </main>
  );
};

export default Home;
