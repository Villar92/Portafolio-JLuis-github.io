import React from "react";

export interface UplaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const UplaLogo: React.FC<UplaLogoProps> = ({
  className = "",
  size = "md",
}) => {
  const sizeMap = {
    sm: "h-9 w-auto",
    md: "h-11 sm:h-12 w-auto",
    lg: "h-16 sm:h-20 w-auto",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://github.com/Villar92/Portafolio-JLuis-github.io/raw/main/public/logo-upla-transparent.png"
          alt="Logo UPLA"
          className={`${sizeMap[size]} object-contain`}
        />
      </div>
    </div>
  );
};