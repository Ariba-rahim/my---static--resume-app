"use client"
// pages/index.tsx
import { useState } from 'react';
import Image from 'next/image';
const Resume = () => {
  const [showSkills, setShowSkills] = useState(true);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="w-11/12 max-w-xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Personal Information */}
      <section className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 font-sans"> Ariba Rahim</h1>
        <p className="text-gray-600">ariba.rahimkhan@gmail.com</p>
        < Image
           src= "/sucess.jpeg"
          alt="Profile Picture"
          width={150}
          height={15}
          className=" w=23 h-36 mx-auto mt-4 rounded-full object-cover"
        />
      </section>
{/*objective*/}
    <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Objective</h2>
        <p className="text-gray-600 border-b-2 pb-2 border-gray-300">Motivated and detail-oriented IT graduate with a strong foundation in software development, networking, and problem-solving. Eager to apply knowledge of programming languages, databases, and system administration to contribute to innovative IT solutions in a dynamic company.</p>
      </section>
      {/* Education Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Education</h2>
        <p className="text-gray-600">Bachelor of Science in Computer Science</p>
        <p className="text-gray-500 border-b-2 pb-2 border-gray-300">XYZ University, 2020</p>
      </section>

      {/* Skills Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Skills</h2>
        {showSkills && (
          <ul className="list-disc list-inside text-gray-600 space-y-1 border-b-2 pb-2 border-gray-300">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        )}
        <button
          onClick={toggleSkills}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-300 transition duration-700"
        >
          Show Skills
        </button>
      </section>

      {/* Work Experience Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Work Experience</h2>
        <p className="text-gray-600">Software Developer at ABC Corp, 2020-Present</p>
      </section>
    </div>
  );
};

export default Resume;


