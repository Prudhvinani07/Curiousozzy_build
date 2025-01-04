import * as React from 'react';

interface Language {
  name: string;
  image: string;
}

const languages: Language[] = [
  {
    name: 'English',
    image: 'https://images.unsplash.com/photo-1526857240824-92be52581d9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Spanish',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'French',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'German',
    image: 'https://images.unsplash.com/photo-1554072675-66db59dba46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mandarin',
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Japanese',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Italian',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Portuguese',
    image: 'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Russian',
    image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Korean',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Arabic',
    image: 'https://images.unsplash.com/photo-1627664174288-dc847af370f0?ixid=M3w2MTgwNzh8MHwxfHNlYXJjaHwyNHx8YXJhYmljfGVufDB8MHx8fDE3MzU5Nzc1NDR8MA&ixlib=rb-4.0.3',
  },
  {
    name: 'Hindi',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Languages() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
            Our <span className="text-primary-coral">Languages</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Learn from our diverse selection of language courses with expert instructors.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 justify-items-center">
            {languages.map((language) => (
              <div key={language.name} className="relative group w-[250px]">
                <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
                  <img
                    src={language.image}
                    alt={language.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Centered name with enhanced effects */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-lg font-semibold text-white group-hover:scale-105 transition-transform duration-300 text-center
                                 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)] group-hover:[text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">
                      {language.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 