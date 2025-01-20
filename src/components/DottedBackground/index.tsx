"use client";
import { useEffect, useState } from "react";
import cn from "@/utils/cn";
import styles from "./styles.module.css";
import { ShootingStar } from "@phosphor-icons/react";

type DottedBackgroundProps = {
  className?: string;
};

function DottedBackground({ className }: DottedBackgroundProps) {
  const [starRotation, setStarRotation] = useState(0);

  useEffect(() => {
    calculateStarRotation();
    window.addEventListener("resize", calculateStarRotation);
    return () => window.removeEventListener("resize", calculateStarRotation);
  }, []);

  function calculateStarRotation() {
    const DEFAULT_ANGLE = 45;
    const acute = (Math.atan(window.innerWidth / window.innerHeight) * 180) / Math.PI;
    setStarRotation(acute + 180 - DEFAULT_ANGLE);
  }

  return (
    <div
      className={cn("absolute left-0 top-0 -z-10 h-dvh w-full overflow-hidden", className)}
      style={{ perspective: "1000px" }}
    >
      {/* Fade Out */}
      <div className={cn("absolute left-0 top-0 z-30 h-full w-full", styles["fade-out"])}></div>

      {/* Vignette */}
      <div className={cn("absolute left-0 top-0 z-20 h-full w-full", styles["vignette"])}></div>

      {/* Shooting Stars */}
      <div
        className={cn("absolute left-0 top-0 z-10 h-full w-full text-4xl", styles["star-wrapper"])}
      >
        <ShootingStar
          className="absolute -translate-x-16 translate-y-16"
          style={{ rotate: `${starRotation}deg` }}
          weight="fill"
        />
        <ShootingStar
          className="absolute -translate-x-4 -translate-y-20"
          style={{ rotate: `${starRotation}deg` }}
          weight="fill"
        />
        <ShootingStar
          className="absolute translate-x-32"
          style={{ rotate: `${starRotation}deg` }}
          weight="fill"
        />
      </div>

      {/* Dotted Background */}
      <div className={cn("w-full h-full", styles["background"])}></div>
    </div>
  );
}

export { DottedBackground };
export type { DottedBackgroundProps };
