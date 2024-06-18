import Navbar from '@/components/Navbar';
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Job Listings',
    description: 'Browse thousands of job listings across various industries and locations.',
    image: 'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/09/29095208/5-Job-Search-Services-Worth-Paying-For.jpg',
  },
  {
    id: 2,
    title: 'Resume Builder',
    description: 'Create professional resumes with our easy-to-use resume builder tool.',
    image: 'https://5.imimg.com/data5/SV/JV/QV/SELLER-110223862/resume-writing-service-500x500.jpg',
  },
  {
    id: 3,
    title: 'Career Advice',
    description: 'Get expert advice on career development, job interviews, and more.',
    image: 'https://mybeta.ca/wp-content/uploads/2023/03/career-advice.jpg',
  },
  {
    id: 4,
    title: 'Company Reviews',
    description: 'Read reviews from current and former employees about various companies.',
    image: 'https://i.pinimg.com/originals/96/96/bc/9696bccf6a88e58e19b4b63c8ab26b01.jpg',
  },
  {
    id: 5,
    title: 'Salary Insights',
    description: 'Access salary data to help you negotiate your job offers and promotions.',
    image: 'https://consulting.wiki/wp-content/uploads/2022/05/X0JsN-ey-salary.png',
  },
  {
    id: 6,
    title: 'Job Alerts',
    description: 'Sign up for job alerts to get notified about new job opportunities.',
    image: 'https://i0.wp.com/plopdo.com/wp-content/uploads/2020/07/WEEKLY-JOB-ALERTS-banner.png?resize=1200%2C642&ssl=1',
  },
];

const Services = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <img src="/assets/img/Screenshot 2024-04-17 at 4.20 1.png" alt="" />
    </>
  );
};

export default Services;
