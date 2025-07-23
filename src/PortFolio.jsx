import React from 'react'
import image from './new.jpg'
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom';
import About from './About'
import Skills from './Skills';
import Projects from './Projects';
import WorkTogether from './WorkTogether';

function PortFolio() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
    <div className='' id='home'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex justify-center border-3 rounded-full'>
        <img src={image} alt="Image" className='w-60 border-3 border-black rounded-full object-cover aspect-square object-top'/>
      </div>
      <div className='flex justify-center text-center flex-col mt-4 gap-1'>
        <h1 className='text-3xl font-bold mt-4'>Mohd Saif</h1>
        <h2 className='text-orange-500 font-bold'>Full Stack Developer</h2>
        <h4 className=''>Just a Developer Who Loves Clean Code and Good UI</h4>
      </div>
      <div className='flex justify-center mt-4 gap-4'>
        <a href="#"><button className='p-4 px-6 flex flex-row gap-2 text-s bg-orange-500 outline-none border-0 rounded-full cursor-pointer hover:bg-orange-600 transition-all duration-300 ease-in-out hover:scale-105'>
          <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
          </svg>Get In Touch</button>
          </a>
        <a href="#" download><button className='border-1 flex flex-row border-blue-600 p-4 gap-2 text-s outline-none rounded-2xl cursor-not-allowed hover:bg-blue-600 transition-all duration-300 ease-in-out hover:scale-105' disabled>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
          </svg>Download Resume</button>
          </a>
      </div>
      <div className='flex justify-center mt-4 flex-wrap flex-row gap-5'>
              <p className='flex flex-row gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt mt-1.5" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>New Delhi,India</p>
              <p className='flex flex-row gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope mt-1.5" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>mohdsaif18500@gmail.com
              </p>
              <p className='flex flex-row gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone mt-1.5" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>+91 82185 32681
              </p>
      </div>
      </div>
    </div>
    <About />
    <Skills />
    <Projects />
    <WorkTogether />
    </>
  )
}

export default PortFolio
