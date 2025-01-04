import { useState } from 'react';

interface Subject {
  id: string;
  name: string;
  image: string;
}

interface FeatureCardProps {
  icon: string;
  text: string;
  alt: string;
}

interface SelectInputProps {
  placeholder: string;
  icon: string;
  alt: string;
  options?: Subject[];
  value?: string;
  onChange?: (value: string) => void;
}

const subjects: Subject[] = [
  {
    id: "1",
    name: "Mathematics",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&h=150&fit=crop"
  },
  {
    id: "2",
    name: "Physics",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=150&h=150&fit=crop"
  },
  {
    id: "3",
    name: "Chemistry",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=150&h=150&fit=crop"
  },
  {
    id: "4",
    name: "Biology",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=150&h=150&fit=crop"
  },
  {
    id: "5",
    name: "Computer Science",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=150&h=150&fit=crop"
  },
  {
    id: "6",
    name: "Literature",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=150&fit=crop"
  }
];

const FeatureCard = ({ icon, text, alt }: FeatureCardProps) => (
  <div className="flex gap-4 items-center p-4 rounded-lg bg-transparent hover:bg-white/10 transition-all duration-300 w-full max-w-md mx-auto">
    <img
      loading="lazy"
      src={icon}
      alt={alt}
      className="w-12 h-12 object-contain"
    />
    <div className="text-lg font-bold text-black">{text}</div>
  </div>
);

const SelectInput = ({ 
  placeholder, 
  icon, 
  alt,
  options = subjects,
  value,
  onChange 
}: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[370px]">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center w-full h-[50px] border-2 border-gray-800 rounded-lg bg-white cursor-pointer"
      >
        <div className="w-full px-4 truncate flex items-center gap-3">
          {value && (
            <img
              src={options.find(opt => opt.id === value)?.image}
              alt=""
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
          )}
          <span className="font-bold">{value ? options.find(opt => opt.id === value)?.name : placeholder}</span>
        </div>
        <img
          src={icon}
          alt={alt}
          className="absolute right-4 w-5 h-5 pointer-events-none"
        />
      </div>
      
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50 max-h-[300px] overflow-y-auto">
          {options.map((subject) => (
            <div
              key={subject.id}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                onChange?.(subject.id);
                setIsOpen(false);
              }}
            >
              <img
                src={subject.image}
                alt={`${subject.name} subject`}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <span className="text-gray-900 truncate font-bold">{subject.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const features = [
  {
    icon: "https://img.icons8.com/fluency/96/fast-cart.png",
    text: "Fast Student Assistant",
    alt: "Fast assistance icon"
  },
  {
    icon: "https://img.icons8.com/fluency/96/certificate.png",
    text: "High Quality Online Classes",
    alt: "Online classes icon"
  },
  {
    icon: "https://img.icons8.com/fluency/96/mouse-left-click.png",
    text: "One Click Help",
    alt: "Help icon"
  },
  {
    icon: "https://img.icons8.com/fluency/96/customer-support.png",
    text: "Customer Satisfaction",
    alt: "Satisfaction icon"
  }
];

export const StudentAssistant: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  return (
    <main className="bg-gradient-to-b from-cyan-400 to-cyan-500">
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-center mt-12 mb-8 text-gray-900 leading-tight tracking-tight drop-shadow-lg transform hover:scale-105 transition-transform duration-300 uppercase">
          Are You Ready?
          <br />
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
            Learn More Today!
          </span>
        </h1>
        
        <form className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="w-full max-w-[370px] h-[50px] px-4 border-2 border-gray-800 rounded-lg font-bold placeholder:font-bold"
            required
          />
          <SelectInput
            placeholder="SELECT SUBJECT"
            icon="https://img.icons8.com/fluency/48/expand-arrow.png"
            alt="Subject selection dropdown"
            value={selectedSubject}
            onChange={setSelectedSubject}
          />
          <button
            type="submit"
            className="w-[120px] h-[45px] bg-gray-900 text-cyan-400 font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform text-sm flex items-center justify-center"
          >
            SUBMIT
          </button>
        </form>
      </section>
    </main>
  );
}; 