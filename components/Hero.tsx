"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#000319] pb-20 pt-36 text-white">
      <div className="pointer-events-none absolute inset-0">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />

        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="blue" />

        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="purple" />
      </div>

      <div className="absolute inset-0 bg-[#000319] bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 bg-[#000319] [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <TextGenerateEffect
            words="Working Towards Smarter Solutions"
            className="text-center text-[40px] font-bold text-white md:text-5xl lg:text-6xl"
          />

          <p className="mb-8 mt-6 text-center text-sm leading-7 text-white/70 md:text-lg md:tracking-wider lg:text-2xl">
            Hi! I&apos;m Rahika Jannat Roza, a passionate{" "}
            <span className="font-semibold text-purple">
              <ReactTyped
                strings={[
                  "Electrical Engineer",
                  "Computer Engineer",
                  "Web Developer",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </span>
            .
          </p>

          <a href="/experience">
            <MagicButton
              title="Experience"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
