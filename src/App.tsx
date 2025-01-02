import * as React from "react";
import { Navbar } from "./components/Navbar";
import { EducationCard } from "./components/EducationCard";
import { FeatureItem } from "./components/FeatureItem";
import { AboutSection } from "./components/AboutSection";
import { ContactForm } from "./components/ContactForm";
import { VideoBackground } from "./components/VideoBackground";
import { FormData } from "./types";

const cardData = [
  { title: "English for Beginners", imageSrc: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1471&auto=format&fit=crop" },
  { title: "Business Spanish", imageSrc: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1470&auto=format&fit=crop" },
  { title: "German Culture", imageSrc: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?q=80&w=1470&auto=format&fit=crop" },
  { title: "French Cuisine", imageSrc: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1470&auto=format&fit=crop" }
];

const features = [
  { icon: "/icons/fast.svg", text: "Fast Student Assistant" },
  { icon: "/icons/quality.svg", text: "High Quality Classes" },
  { icon: "/icons/help.svg", text: "24/7 Support" },
  { icon: "/icons/satisfaction.svg", text: "100% Satisfaction" }
];

const aboutSections = [
  {
    title: "Our History",
    description: "Founded in 2024, we've grown from a small tutoring service to a global e-learning platform, helping thousands of students achieve their goals."
  },
  {
    title: "Our Faculty",
    description: "Our instructors are certified professionals with years of teaching experience and a passion for helping students succeed."
  },
  {
    title: "Our Mission",
    description: "To make quality education accessible to everyone, everywhere, through innovative online learning solutions."
  }
];

const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <VideoBackground videoUrl="/videos/hero-background.mp4" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Learn Without <span className="text-primary-coral">Limits</span>
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join our global community of learners and unlock your potential with expert-led courses in multiple languages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-coral text-white rounded-full text-lg font-semibold hover:bg-primary-coral/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Start Learning Now
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1 hover:shadow-lg border border-white/30">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
            Why Choose <span className="text-primary-coral">CuriousOzzy</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
            Popular <span className="text-primary-coral">Courses</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.map((card, index) => (
              <EducationCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
            About <span className="text-primary-coral">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutSections.map((section, index) => (
              <AboutSection key={index} {...section} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
            Get in <span className="text-primary-coral">Touch</span>
          </h2>
          <div className="flex justify-center">
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CuriousOzzy</h3>
              <p className="text-white/70">
                Making quality education accessible to everyone, everywhere.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Home</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Courses</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">About</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-white/70">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@curiousozzy.com
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1 234 567 890
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/70">
            <p>© 2024 CuriousOzzy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;