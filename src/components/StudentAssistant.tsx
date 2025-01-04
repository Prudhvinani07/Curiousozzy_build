import * as React from "react";
import { FeatureCardProps, SelectInputProps } from "../types";

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, text, alt }) => (
  <div className="flex gap-4 items-center p-4 rounded-lg bg-transparent hover:bg-white/5 transition-all duration-300">
    <img
      loading="lazy"
      src={icon}
      alt={alt}
      className="w-12 h-12 object-contain"
    />
    <div className="text-lg font-medium text-white">{text}</div>
  </div>
);

export const SelectInput: React.FC<SelectInputProps> = ({ placeholder, icon, alt }) => (
  <div className="relative flex items-center w-full max-w-[370px] border-2 border-gray-800 rounded-lg">
    <select className="w-full px-4 py-3 appearance-none bg-transparent cursor-pointer">
      <option value="" disabled selected>{placeholder}</option>
    </select>
    <img
      loading="lazy"
      src={icon}
      alt={alt}
      className="absolute right-4 w-5 h-5 pointer-events-none"
    />
  </div>
);

const features = [
  {
    icon: "/icons/image.png",
    text: "Fast Student Assistant",
    alt: "Fast assistance icon"
  },
  {
    icon: "/icons/online-classes-icon.svg",
    text: "High Quality Online Classes",
    alt: "Online classes icon"
  },
  {
    icon: "/icons/help-icon.svg",
    text: "One Click Help",
    alt: "Help icon"
  },
  {
    icon: "/icons/satisfaction-icon.svg",
    text: "Customer Satisfaction",
    alt: "Satisfaction icon"
  }
];

export const StudentAssistant: React.FC = () => (
  <main className="min-h-screen bg-gradient-to-b from-cyan-400 to-cyan-500">
    <section className="container mx-auto px-4 py-8 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
          />
        ))}
      </div>
      
      <h1 className="text-4xl font-black text-center mt-12 mb-6">
        ARE YOU READY? LEARN MORE TODAY!
      </h1>
      
      <form className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-center">
        <input
          type="email"
          placeholder="EMAIL ADDRESS"
          className="w-full max-w-[370px] px-4 py-3 border-2 border-gray-800 rounded-lg"
          required
        />
        <SelectInput
          placeholder="SELECT SUBJECT"
          icon="/icons/dropdown-icon.svg"
          alt="Subject selection dropdown"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-gray-900 text-cyan-400 font-bold rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          SUBMIT
        </button>
      </form>
    </section>
  </main>
); 