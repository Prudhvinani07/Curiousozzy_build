import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { CheckIcon } from '@heroicons/react/20/solid';

const subjects = [
  { id: 1, name: 'Mathematics', icon: '/icons/math-icon.svg' },
  { id: 2, name: 'English Language', icon: '/icons/english-icon.svg' },
  { id: 3, name: 'Science', icon: '/icons/science-icon.svg' },
  { id: 4, name: 'History', icon: '/icons/history-icon.svg' },
  { id: 5, name: 'Geography', icon: '/icons/geography-icon.svg' },
  { id: 6, name: 'Computer Science', icon: '/icons/cs-icon.svg' },
];

export const SubjectSelect = () => {
  const [selected, setSelected] = useState(subjects[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-full max-w-[370px]">
        <Listbox.Button className="relative w-full flex items-center px-4 py-3 bg-transparent border-2 border-gray-800 rounded-lg text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-coral">
          <span className="block truncate text-gray-800">{selected.name}</span>
          <ChevronUpDownIcon
            className="w-5 h-5 ml-auto text-gray-800"
            aria-hidden="true"
          />
        </Listbox.Button>
        
        <Listbox.Options className="absolute z-50 w-full mt-1 overflow-auto bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {subjects.map((subject) => (
            <Listbox.Option
              key={subject.id}
              value={subject}
              className={({ active, selected }) =>
                `relative cursor-pointer select-none py-3 px-4 ${
                  active ? 'bg-primary-coral/10 text-primary-coral' : 'text-gray-800'
                }`
              }
            >
              {({ selected, active }) => (
                <div className="flex items-center">
                  <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                    {subject.name}
                  </span>
                  {selected && (
                    <CheckIcon className="w-5 h-5 ml-auto text-primary-coral" aria-hidden="true" />
                  )}
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};