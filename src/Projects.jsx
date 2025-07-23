import React from 'react';
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si';

const techIcons = {
  react: <FaReact className="text-[#61DAFB]" />,
  node: <FaNodeJs className="text-[#3C873A]" />,
  html: <FaHtml5 className="text-[#E34F26]" />,
  css: <FaCss3Alt className="text-[#1572B6]" />,
  mongo: <SiMongodb className="text-[#47A248]" />,
  tailwind: <SiTailwindcss className="text-[#38B2AC]" />,
  js: <SiJavascript className="text-[#F7DF1E]" />,
};

const projects = [
  {
    title: 'Not Form',
    description: 'A full-stack website featuring user authentication and real-time content upload functionality, ensuring secure access and instant data synchronization.',
    tech: ['react', 'tailwind', 'js'],
    code: 'https://github.com/mohd-saif-1850/Mega-Project',
    demo: 'https://not-form.vercel.app/',
  },
  {
    title: 'Addictions Of Teenagers',
    description: 'Highlighting the rising digital and behavioral addictions among teenagers, impacting their mental health, focus, and real-life social interactions.',
    tech: ['react', 'tailwind','css', 'js'],
    code: 'https://github.com/mohd-saif-1850/Addictions-Of-Teenagers',
    demo: 'https://addictions-of-teenagers.vercel.app/',
  },
  {
    title: 'Music Player UI',
    description: 'Developed a high-fidelity music player UI using modern frontend technologies, focusing on clean aesthetics and interactive audio controls.',
    tech: ['html', , 'tailwind', 'css','js'],
    code: 'https://github.com/mohd-saif-1850/Music-Player-UI',
    demo: 'https://mohd-saif-1850.github.io/Music-Player-UI/',
  },
  {
    title: 'To Do List',
    description: 'A full-featured To-Do app with intuitive design and complete task handling capabilities.',
    tech: ['html', 'css', 'js',],
    code: 'https://github.com/mohd-saif-1850/To-Do-List',
    demo: 'https://mohd-saif-1850.github.io/To-Do-List/',
  },
];

function Projects() {
  return (
    <section id="projects" className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white text-center">
          🚀 Featured Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/30 p-6 rounded-xl border border-zinc-700 backdrop-blur-md shadow-md hover:scale-[1.02] transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-3 text-2xl mb-4 flex-wrap">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{techIcons[tech]}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white border border-gray-500 px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                >
                  <FaGithub /> View Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white border border-gray-500 px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/mohd-saif-1850"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-500 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            <FaGithub className="text-xl" /> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
