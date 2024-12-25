import Image from "next/image";
import React from "react";

export default function HeroIcon({
  iconSrc,
  height = 500,
  width = 500,
}: {
  iconSrc: string;
  height?: number;
  width?: number;
}) {
  return (
    <div className="relative h-96 w-full">
      <div className="absolute inset-0 bg-green-200 rounded-lg transform -rotate-6"></div>
      <div className="absolute inset-0 bg-green-600/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
        <Image src={iconSrc} alt="Hero Image" width={width} height={height} />
      </div>
    </div>
  );
}
