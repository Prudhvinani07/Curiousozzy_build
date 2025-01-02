import * as React from "react";
import { LogoProps } from "../types";

export const Logo: React.FC<LogoProps> = ({ imageUrl, title }) => {
  return (
    <div className="flex items-center gap-3 py-4 pl-4 pr-6 md:pl-6 md:pr-8">
      <img
        loading="lazy"
        src={imageUrl}
        alt={`${title} Logo`}
        className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 hover:scale-105"
      />
      <div className="flex items-center">
        <h1 className="text-2xl md:text-3xl font-black tracking-wider text-gray-200 transition-colors duration-300 hover:text-primary-coral font-poppins">
          {title}
        </h1>
      </div>
    </div>
  );
}; 