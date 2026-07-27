"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "./MagicButton";

const RecentProjects = () => {
  return (
    <section id="projects" className="bg-[#000319] py-20 text-white">
      <h1 className="heading text-white">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-10 p-4">
        {projects.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="flex min-h-[18rem] w-[80vw] items-center justify-center sm:w-96"
          >
            <Link href={item.link} className="block w-full">
              <PinContainer title={item.link} containerClassName="w-full">
                <article className="flex min-h-[16rem] w-full flex-col justify-between rounded-3xl border border-white bg-[#070a20] p-7 shadow-sm transition duration-300 hover:border-purple-300 hover:shadow-lg">
                  <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple">
                      Featured Project
                    </p>

                    <h2 className="line-clamp-3 text-xl font-bold leading-snug text-white md:text-2xl">
                      {item.title}
                    </h2>
                  </div>

                  <div className="mt-8 flex items-center justify-end">
                    <p className="text-sm font-medium text-purple md:text-base">
                      View Project
                    </p>

                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </article>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
