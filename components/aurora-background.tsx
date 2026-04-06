"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col bg-[#030805] text-foreground",
        className
      )}
      {...props}
    >
      {/* Aurora layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute -inset-2.5 opacity-38 md:opacity-48 will-change-transform",
            // The aurora gradient layers
            "bg-[repeating-linear-gradient(100deg,rgba(255,255,255,0.025)_0%,rgba(255,255,255,0.025)_6%,transparent_9%,transparent_12%,rgba(255,255,255,0.025)_15%),repeating-linear-gradient(100deg,#040707_0%,#0a1c12_14%,#041009_28%,#124128_40%,#04120a_54%,#0f2a1b_68%,#040c08_82%,#040707_100%)]",
            "bg-size-[300%_200%,200%_150%]",
            "bg-position-[50%_50%,50%_50%]",
            "animate-none motion-safe:animate-aurora md:animation-duration-[14s]",
            "blur-[52px] md:blur-[84px]",
            showRadialGradient
              ? "mask-[radial-gradient(ellipse_80%_80%_at_50%_0%,black_30%,transparent_100%)]"
              : "mask-[radial-gradient(ellipse_100%_100%_at_50%_-20%,black_50%,transparent_100%)]"
          )}
        />
        {/* Second aurora layer for depth */}
        <div
          className={cn(
            "absolute -inset-2.5 hidden opacity-24 will-change-transform md:block",
            "bg-[repeating-linear-gradient(80deg,#030504_0%,#0b1c12_18%,#041008_36%,#165234_52%,#04120a_72%,#070d0a_100%)]",
            "bg-size-[400%_200%]",
            "bg-position-[50%_50%]",
            "animate-none motion-safe:animate-aurora direction-[reverse] md:animation-duration-[20s]",
            "blur-[90px] md:blur-[104px]",
            "mask-[radial-gradient(ellipse_60%_50%_at_70%_80%,black_20%,transparent_80%)]"
          )}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full min-h-screen">{children}</div>
    </div>
  );
};
