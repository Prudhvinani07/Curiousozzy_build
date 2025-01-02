import * as React from "react";
import { AboutSectionProps } from "../types";

export const AboutSection: React.FC<AboutSectionProps> = ({ title, description }) => {
  return (
    <div className="flex-1 p-8 bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-coral rounded-full opacity-10" />
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-teal rounded-full opacity-10" />
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-primary-mint mb-6">
            {title}
          </h3>
          
          <div className="h-1 w-20 bg-primary-coral rounded-full mb-6" />
          
          <p className="text-white/90 leading-relaxed">
            {description}
          </p>
          
          <button className="mt-6 px-6 py-2 bg-primary-mint text-primary-blue rounded-lg font-semibold hover:bg-white transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}; 