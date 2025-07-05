import Image from "next/image";
import React, { memo } from "react";

interface HeroIconProps {
  iconSrc: string;
  height?: number;
  width?: number;
  className?: string;
  alt?: string;
}

export default memo(function HeroIcon({
  iconSrc,
  height = 500,
  width = 500,
  className = "",
  alt = "Hero Image"
}: HeroIconProps) {
  return (
    <div className={`relative h-96 w-full ${className}`}>
      <div className="absolute inset-0 bg-green-200 rounded-lg transform -rotate-6"></div>
      <div className="absolute inset-0 bg-green-600/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
        <Image
          src={iconSrc}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
        />
      </div>
    </div>
  );
});
