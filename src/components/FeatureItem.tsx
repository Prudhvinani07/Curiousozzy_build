import * as React from "react";
import { FeatureProps } from "../types";

export const FeatureItem: React.FC<FeatureProps> = ({ icon, text }) => {
  return (
    <div className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="w-16 h-16 mb-4 rounded-full bg-primary-mint/10 flex items-center justify-center">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold text-primary-blue mb-2">{text}</h3>
      <div className="h-1 w-10 bg-primary-coral rounded-full transition-all duration-300 group-hover:w-20" />
    </div>
  );
}; 