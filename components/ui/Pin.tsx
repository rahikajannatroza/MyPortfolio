"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-50 cursor-pointer group/pin",
        containerClassName,
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center transition duration-700",
          className,
        )}
      >
        <div className="relative z-50">{children}</div>
      </div>

      <PinPerspective title={title} href={href} />
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none absolute inset-0 z-[60] flex opacity-0 transition duration-500 group-hover/pin:opacity-100">
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className="relative flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-1 ring-1 ring-white/10">
          <span className="relative z-20 inline-block py-0.5 text-xs font-bold text-white">
            {title}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
