import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss,SiCplusplus } from 'react-icons/si';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const allSkills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-[#e34f26]" />, level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 60 },
  { name: 'JavaScript', icon: <FaJsSquare className="text-[#f7df1e]" />, level: 72 },
  { name: 'React', icon: <FaReact className="text-[#61dafb]" />, level: 80 },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#68a063]" />, level: 85 },
  { name: 'Express.js', icon: <SiExpress className="text-white" />, level: 30 },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#4DB33D]" />, level: 83 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38bdf8]" />, level: 88 },
  { name: 'Git', icon: <FaGitAlt className="text-[#f1502f]" />, level: 80 },
  { name: 'Database', icon: <FaDatabase className="text-[#f29111]" />, level: 78 },
  { name: 'C++', icon: <SiCplusplus className="text-[#38bdf8]" />, level: 53 },
  { name: 'Python', icon: <FaPython className="text-yellow-200" />, level: 53 },
];

function Skills() {
  const [index, setIndex] = useState(0);
  const visibleSkills = allSkills.slice(index, index + 4);

  return (
    <section id="skills" className="w-full h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        <div className="text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            I'm constantly sharpening my technical skills to bring bold ideas to life. Here's a snapshot of the core tools and languages I work with, each representing a key aspect of modern web development.
          </p>
        </div>

        
        <div className="bg-[#111111]/70 rounded-xl p-6 w-full">
          <div className="flex flex-col space-y-6">
            {visibleSkills.map((skill, i) => (
              <div key={i} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="border border-gray-600 p-2 rounded-full">
                    {skill.icon}
                  </div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
                <div className="flex items-center gap-2 w-1/2">
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-300 text-sm">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>

          
          <div className="flex justify-between pt-6">
            <button
              onClick={() => setIndex((prev) => Math.max(prev - 4, 0))}
              disabled={index === 0}
              className={`p-2 rounded-full border ${index === 0 ? 'border-gray-600 text-gray-500 cursor-not-allowed' : 'border-gray-400  cursor-pointer text-white hover:bg-gray-800'}`}
            >
              <MdNavigateBefore size={24} />
            </button>
            <button
              onClick={() => setIndex((prev) => (index + 4 < allSkills.length ? prev + 4 : prev))}
              disabled={index + 4 >= allSkills.length}
              className={`p-2 rounded-full border ${index + 4 >= allSkills.length ? 'border-gray-600 text-gray-500 cursor-not-allowed' : 'border-gray-400 text-white  cursor-pointer hover:bg-gray-800'}`}
            >
              <MdNavigateNext size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
