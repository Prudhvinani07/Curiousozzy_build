import * as React from "react";
import { CardProps } from "../types";

export const EducationCard: React.FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${title} course`}
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-blue mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
            </svg>
            8 weeks
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            Beginner
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-primary-coral font-bold text-lg">$99.99</div>
          <button className="px-4 py-2 bg-primary-teal text-white rounded-lg hover:bg-primary-blue transition-colors duration-300">
            Enroll Now
          </button>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            1,234 students enrolled
          </div>
        </div>
      </div>
    </div>
  );
}; 