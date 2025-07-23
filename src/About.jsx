import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaWhatsapp } from 'react-icons/fa';
import { MdCoffee, MdFavorite } from 'react-icons/md';
import { BsLightningChargeFill } from 'react-icons/bs';


function About() {
  return (
    <>
    <section id="about" className="w-full h-screen items-center flex justify-center px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        <div className="text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            I’m a passionate <span className="text-yellow-400 font-medium">full-stack developer</span> crafting modern web experiences. From intuitive front-ends to scalable back-end solutions, I love transforming ideas into robust applications. When I’m not coding, I’m learning, building side-projects, or refining existing tools.
          </p>

          
          <div className="flex flex-wrap gap-4">
            <span className="bg-zinc-800 text-gray-100 px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform">
              💻 Full Stack Developer
            </span>
            <span className="bg-zinc-800 text-gray-100 px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform">
              🧠 Problem Solver
            </span>
            <span className="bg-zinc-800 text-gray-100 px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform">
              🔧 Tech Explorer
            </span>
          </div>

          
          <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/mohd-saif-1850"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 p-3 rounded-full text-gray-400 hover:text-white hover:border-[#333] hover:bg-[#333] hover:scale-110 transition duration-300"
              >
                <FaGithub className="text-xl hover:text-[#181717]" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-saif-1850-web-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 p-3 rounded-full text-gray-400 hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:scale-110 transition duration-300"
              >
                <FaLinkedin className="text-xl hover:text-[#0A66C2]" />
              </a>
              
            </div>
                      </div>
                    

        
        <div className="bg-black/60 rounded-xl p-6 font-mono text-sm text-green-400">
          <p><span className="text-purple-400">const</span> developer = {'{'}</p>
          <p className="pl-4">name: <span className="text-yellow-300">'Mohd Saif'</span>,</p>
          <p className="pl-4">role: <span className="text-yellow-300">'Full Stack Developer'</span>,</p>
          <p className="pl-4">location: <span className="text-yellow-300">'New Delhi, India'</span>,</p>
          <p className="pl-4">available: <span className="text-red-400">true</span>,</p>
          <p className="pl-4">skills: [<span className="text-cyan-300">'React'</span>, <span className="text-cyan-300">'Node.js'</span>, <span className="text-cyan-300">'Express.justify'</span>, <span className="text-cyan-300">'MongoDB'</span>, <span className="text-cyan-300">'Tailwind'</span>],</p>
          <p className="pl-4">focus: <span className="text-yellow-300">'Building clean & scalable apps'</span></p>
          <p>{'}'}</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
