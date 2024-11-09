// pages/about.tsx
import { FC } from 'react';
import img1 from "@/images/syedpic.jpg"
import img2 from "@/images/john.jpg"
import img3 from "@/images/michael.jpg"
import Image from 'next/image';

const teamMembers = [
  { id: 1, name: 'Syed Humza', role: 'Founder & CEO', image: img1 },
  { id: 2, name: 'Jane Smith', role: 'Lead Developer', image: img2 },
  { id: 3, name: 'Michael Brown', role: 'Designer', image: img3 },
];

const About: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          We are a dynamic team of professionals passionate about delivering quality services. Our mission is
          to provide top-notch solutions to our clients while fostering a collaborative and innovative work
          environment.
        </p>
        
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow-lg w-60">
              <Image src={member.image} alt={member.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
