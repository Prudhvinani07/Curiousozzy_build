import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "US Dept. of Ed",
    image: "Board_images/USA.png",
  },
  {
    id: 2,
    name: "IB (PYP/MYP)",
    image: "/Board_images/**IB (PYP:MYP)**.png",
  },
  {
    id: 3,
    name: "Cambridge Int'l",
    image: "Board_images/**Cambridge Int'l**.png",
  },
  {
    id: 4,
    name: "SABIS",
    image: "Board_images/sabis.png",
  },
  {
    id: 5,
    name: "ACCCS/CSBA",
    image: "/Board_images/CSBA.png",
  },
  {
    id: 6,
    name: "ICSE/CBSE",
    image: "Board_images/ **ICSE:CBSE**.png",
  },
];

const TeamBoard: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Boards
          </h2>
          
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <img
                    className="h-full w-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBoard; 