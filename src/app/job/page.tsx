import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Innovators Inc.',
    location: 'San Francisco, CA',
    description: 'Develop and maintain software applications using modern technologies.',
  },
  {
    id: 2,
    title: 'Marketing Specialist',
    company: 'Creative Solutions Ltd.',
    location: 'New York, NY',
    description: 'Plan and execute marketing campaigns to drive brand awareness and sales.',
  },
  {
    id: 3,
    title: 'Project Manager',
    company: 'Business Corp.',
    location: 'Austin, TX',
    description: 'Oversee project timelines and ensure deliverables are met on schedule.',
  },
  {
    id: 4,
    title: 'UX/UI Designer',
    company: 'Design Studio Co.',
    location: 'Remote',
    description: 'Design user interfaces and experiences for web and mobile applications.',
  },
  {
    id: 5,
    title: 'Data Analyst',
    company: 'Analytics Gurus',
    location: 'Boston, MA',
    description: 'Analyze data to provide insights and support decision-making processes.',
  },
];

const Jobs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Job Opportunities</h1>
          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{job.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{job.company} - {job.location}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">{job.description}</p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-500 font-medium"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
