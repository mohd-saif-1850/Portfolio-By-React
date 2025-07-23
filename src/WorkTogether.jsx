import React from 'react';
import { FaPaperPlane, FaDownload } from 'react-icons/fa';
import { CheckCircle } from 'lucide-react';

function WorkTogether() {
  return (
    <section id="contact" className="w-full py-20 flex flex-col items-center bg-transparent">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
        <span className="text-white">Let's</span>{' '}
        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
          Work Together
        </span>
      </h2>
      <p className="text-center text-gray-300 max-w-xl mx-auto mb-10 text-base sm:text-lg">
        Got an idea? I’d love to hear it. Let’s create something meaningful and unique together.
      </p>

      <div className="bg-[#181414]/60 border border-[#3b2e2e] rounded-2xl p-10 sm:p-12 w-[95%] max-w-3xl text-center shadow-xl backdrop-blur-sm">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-full text-white">
            <FaPaperPlane className="text-2xl" />
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Ready to Start a Project?</h3>
        <p className="text-gray-300 mb-8 text-sm sm:text-base">
          I'm currently open to freelance opportunities and collaborations. Feel free to reach out and let's talk!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
          target='_blank'
            href="https://wa.me/8218532681"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            <FaPaperPlane /> Send Message
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1f1f1f] border border-gray-600 cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-6 text-sm text-green-400 mt-6 flex-wrap">
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" /> Quick Response
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" /> Free Consultation
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" /> Flexible Rates
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkTogether;
