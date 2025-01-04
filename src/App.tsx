import * as React from "react";
import { Navbar } from "./components/Navbar";
import { EducationCard } from "./components/EducationCard";
import { AboutSection } from "./components/AboutSection";
import { ContactForm } from "./components/ContactForm";
import { VideoBackground } from "./components/VideoBackground";
import { StudentAssistant } from "./components/StudentAssistant";
import TeamBoard from "./components/TeamBoard";
import Languages from "./components/Languages";
import { FormData } from "./types";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Field, Label, Switch } from '@headlessui/react';

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
  const [agreed, setAgreed] = React.useState(false);
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
      <StudentAssistant />

      {/* Team Board Section */}
      <TeamBoard />

      {/* Languages Section */}
      <Languages />

      {/* About Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">
              About Curiousozzy
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We're a dynamic group of individuals who are passionate about what we do
              and dedicated to delivering the best results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Our History',
                image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3',
                description: 'Since our establishment in 2024, we have been dedicated to providing quality education to students from all over the world. We started as a small language school, and have since expanded to offer a wide range of programs in various fields. We are proud of our history and the impact we have made on the lives of our students.',
              },
              {
                title: 'Our Faculty',
                image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3',
                description: 'Our faculty consists of experienced educators and professionals who are passionate about their fields and committed to providing the best possible education to our students. We carefully select our faculty members based on their expertise, teaching experience, and dedication to their craft.',
              },
              {
                title: 'Our Partnerships',
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3',
                description: 'We have established partnerships with leading educational institutions and organizations around the world. These partnerships allow us to offer our students unique opportunities such as study abroad programs, internships, and research collaborations. We are proud to be part of a global network of educators and learners who share our commitment to quality education.',
              },
              {
                title: 'Our Community',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3',
                description: 'Join our vibrant community of learners and educators committed to excellence in education and professional development.',
              },
            ].map((section) => (
              <div 
                key={section.title} 
                className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-xl"
              >
                <div className="w-full sm:w-48 h-48 flex-shrink-0">
                  <img
                    className="h-48 w-full sm:w-48 rounded-xl object-cover"
                    src={section.image}
                    alt={section.title}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Us</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Feel free to contact us for any questions or inquiries.</p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 hover:shadow-md transition-shadow duration-200"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 hover:shadow-md transition-shadow duration-200"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 hover:shadow-md transition-shadow duration-200"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 hover:shadow-md transition-shadow duration-200"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:shadow-md transition-shadow duration-200">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 hover:shadow-md transition-shadow duration-200"
                  defaultValue={''}
                />
              </div>
            </div>
            <Field className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                  />
                </Switch>
              </div>
              <Label className="text-sm/6 text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Label>
            </Field>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>

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
                <li><a href="#" className="text-white/70 hover:text-white">Boards</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Languages</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Children Program</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Contact Us</a></li>
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