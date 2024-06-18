"use client"
import { useState } from 'react';
import Link from 'next/link';

interface Slide {
  title: string;
  company: string;
  type: string;
  date: string;
}

const slides: Slide[] = [
  { title: "Software Engineer", company: "TCS NQT", type: "Full-Time Job", date: "April 17, 2024" },
  { title: "Senior QA", company: "Kshan Tech Soft", type: "Part-Time", date: "April 20, 2024" },
  { title: "Software Engineer", company: "TCS NQT", type: "Full-Time", date: "April 17, 2024" },
  { title: "Finance Executive", company: "FIS Global", type: "Internship", date: "April 17, 2024" },
  { title: "Software Engineer", company: "TCS NQT", type: "Full-Time", date: "April 17, 2024" },
];

const CarouselHeroSec = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex items-center w-full min-h-[474px] bg-gradient-to-r text-gray-800 from-[#E2FAFF] to-[#FFDCFB] py-8">
      <div className="flex flex-col items-center w-full max-w-screen-lg px-2 z-10">
        <div className="relative w-full md:w-[35vw] overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="flex-none w-full p-6">
                <div className="flex flex-col items-center p-6 bg-opacity-50 rounded-lg">
                  <h1 className="mb-4 w-full text-4xl lg:ml-16  text-center lg:text-start  font-semibold">{slide.title}</h1>
                  <div className="details w-full mb-6 lg:ml-16  text-center lg:text-start  font-semibold">
                    <h6>{slide.company}</h6>
                    <h6>{slide.type}</h6>
                    <h6>{slide.date}</h6>
                  </div>
                  <div className="buttons flex flex-col lg:flex-row lg:w-full lg:ml-12">
                    <Link href="#" className="px-4 py-2 mb-2 lg:mx-2 lg:mb-0 text-white bg-blue-600 rounded hover:bg-gray-800">Apply Now</Link>
                    <Link href="#" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-gray-800">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handlePrev} className="absolute left-0 p-2 transform -translate-y-1/2 rounded-full top-1/2">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/previous-icon.png" alt="Previous" className="w-6 h-6" />
          </button>
          <button onClick={handleNext} className="absolute right-0 p-2 transform -translate-y-1/2 rounded-full top-1/2">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/next-icon.png" alt="Next" className="w-6 h-6" />
          </button>
        </div>
        <ol className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <li
              key={index}
              className={`w-3 h-3 bg-gray-600 rounded-full ${index === currentSlide ? 'opacity-100' : 'opacity-50'}`}
              onClick={() => setCurrentSlide(index)}
            ></li>
          ))}
        </ol>
      </div>
      <div className="absolute inset-0 z-0 items-center justify-end lg:right-[10vw] hidden lg:flex">
          <div className="absolute w-[396px] h-[318px] transform rotate-[-13.42deg] bg-gray-400 rounded-[40px]"></div>
          <div className="absolute w-[396px] h-[318px] transform rotate-[-10.86deg] bg-gray-500 rounded-[40px]"></div>
          <div className="absolute w-[396px] h-[318px] transform rotate-[-7.15deg] bg-[#00081A] rounded-[40px]"></div>
          <div className="absolute w-[289px] h-[282px] transform rotate-[-47.50deg] bg-gradient-to-r from-[#96ECFF] to-[#FFB8F8] blur-[131px] shadow-[131px]"></div>
          <img className="absolute w-[612px] h-[408px] lg:right-[-6vw]" src="./assets/img/girl-with-mobile.png" alt="Girl with mobile" />
        </div>
    </div>
  );
};

export default CarouselHeroSec;
