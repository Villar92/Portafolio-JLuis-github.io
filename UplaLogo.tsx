"use client";

import React from "react";

interface UplaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const UplaLogo: React.FC<UplaLogoProps> = ({
  className = "",
  size = "md",
  showText = true,
}) => {
  const sizeMap = {
    sm: "h-9 w-auto",
    md: "h-11 sm:h-12 w-auto",
    lg: "h-16 sm:h-20 w-auto",
  };

  const containerPadding = {
    sm: "p-1",
    md: "p-1 sm:p-1.5",
    lg: "p-2",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official UPLA Hexagonal Emblem & Logo Container */}
      <div
        className={`relative flex-shrink-0 bg-white/95 dark:bg-white rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-700/60 ${containerPadding[size]} transition-transform hover:scale-105 duration-200 flex items-center justify-center`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://github.com/Villar92/Portafolio-JLuis-github.io/raw/main/public/logo-upla-transparent.png?raw=true"
          alt="Logotipo Oficial Universidad Peruana Los Andes - UPLA"
          className={`${sizeMap[size]} object-contain drop-shadow-sm`}
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-tight select-none">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-upla-800 dark:text-sky-300">
            Universidad Peruana
          </span>
          <span className="text-sm sm:text-base font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
            LOS ANDES{" "}
            <span className="text-[10px] sm:text-xs bg-[#0066B2] text-white font-extrabold px-1.5 py-0.2 rounded font-mono shadow-xs">
              UPLA
            </span>
          </span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
            Facultad de Ingeniería • Sistemas
          </span>
        </div>
      )}
    </div>
  );
};
