import * as React from "react";
import { NavItemProps } from "../types";

export const NavItem: React.FC<NavItemProps> = ({ label, isHighlighted }) => {
  const baseStyles = "relative px-4 py-2 font-bold text-base transition-all duration-300";
  const textStyles = isHighlighted 
    ? "text-red-400" 
    : "text-gray-200 hover:text-primary-coral";
  const backgroundStyles = isHighlighted 
    ? "bg-white shadow-md hover:shadow-lg rounded-full" 
    : "hover:bg-white/5 rounded-lg";
  const mobileStyles = "w-full text-left md:w-auto";

  return (
    <button
      className={`${baseStyles} ${textStyles} ${backgroundStyles} ${mobileStyles}`}
      role="menuitem"
      tabIndex={0}
      aria-current={isHighlighted ? "page" : undefined}
    >
      <span className="relative z-10">{label.toUpperCase()}</span>
      {!isHighlighted && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-coral transition-all duration-300 group-hover:w-full" />
      )}
    </button>
  );
}; 