import Navbar from '@/components/Navbar';
import React from 'react';

type TrainingProgram = {
  id: number;
  title: string;
  provider: string;
  duration: string;
  description: string;
};

const trainingPrograms: TrainingProgram[] = [
  {
    id: 1,
    title: 'Full Stack Web Development Bootcamp',
    provider: 'Code Academy',
    duration: '12 weeks',
    description: 'Intensive training program covering front-end and back-end development.',
  },
  {
    id: 2,
    title: 'Digital Marketing Certification',
    provider: 'Marketing Pros',
    duration: '6 weeks',
    description: 'Learn essential digital marketing skills including SEO, SEM, and social media marketing.',
  },
  {
    id: 3,
    title: 'Project Management Professional (PMP) Prep Course',
    provider: 'Project Management Institute',
    duration: '4 weeks',
    description: 'Prepare for the PMP certification exam with comprehensive study materials and practice tests.',
  },
  {
    id: 4,
    title: 'Data Science Fundamentals',
    provider: 'Data Analytics Academy',
    duration: '8 weeks',
    description: 'Introduction to data science concepts, data analysis, and visualization techniques.',
  },
];

const TrainingPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Training Programs</h1>
          <div className="grid grid-cols-1 gap-6">
            {trainingPrograms.map((program) => (
              <div key={program.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{program.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{program.provider} - {program.duration}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">{program.description}</p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-500 font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src="/assets/img/Screenshot 2024-04-17 at 4.20 1.png" alt="" className="dark:hidden" />
    </>
  );
};

export default TrainingPage;
