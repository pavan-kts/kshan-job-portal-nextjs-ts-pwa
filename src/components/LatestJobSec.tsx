import React from 'react';

const LatestJobSec = () => {
  const jobs = [
    {
      id: 1,
      logo: '/assets/img/Tata_logo 1.png',
      title: 'Software Engineer',
      company: 'TCS NQT',
      posted: 'a day ago',
      type: 'Full Time',
      ctc: 'INR 5,40,000',
      industry: 'IT/ Computers-Software',
      location: 'Pune, Maharashtra',
      registration: '17 Apr, 2024 - 03:00 PM'
    },
    {
      id: 2,
      logo: '/assets/img/kts.png',
      title: 'Senior QA',
      company: 'Kshan Tech Soft',
      posted: '2 days ago',
      type: 'Part Time',
      ctc: 'INR 8,40,000',
      industry: 'IT/ Computers-Software',
      location: 'Pune, Maharashtra',
      registration: '20 Apr, 2024 - 03:00 PM'
    },
    {
      id: 3,
      logo: '/assets/img/Tata_logo 3.png',
      title: 'Finance Executive',
      company: 'FIS Global',
      posted: 'a day ago',
      type: 'Internship',
      ctc: 'INR 5,40,000',
      industry: 'Financial',
      location: 'Remotely',
      registration: '17 Apr, 2024 - 03:00 PM'
    },
    {
        id: 4,
        logo: '/assets/img/Tata_logo 1.png',
        title: 'Software Engineer',
        company: 'TCS NQT',
        posted: 'a day ago',
        type: 'Full Time',
        ctc: 'INR 5,40,000',
        industry: 'IT/ Computers-Software',
        location: 'Pune, Maharashtra',
        registration: '17 Apr, 2024 - 03:00 PM'
      },
      {
        id: 5,
        logo: '/assets/img/kts.png',
        title: 'Senior QA',
        company: 'Kshan Tech Soft',
        posted: '2 days ago',
        type: 'Part Time',
        ctc: 'INR 8,40,000',
        industry: 'IT/ Computers-Software',
        location: 'Pune, Maharashtra',
        registration: '20 Apr, 2024 - 03:00 PM'
      },
      {
        id: 6,
        logo: '/assets/img/Tata_logo 3.png',
        title: 'Finance Executive',
        company: 'FIS Global',
        posted: 'a day ago',
        type: 'Internship',
        ctc: 'INR 5,40,000',
        industry: 'Financial',
        location: 'Remotely',
        registration: '17 Apr, 2024 - 03:00 PM'
      }
  ];

  return (
    <div className="bg-[#E9F4FA] p-8 mx-6">
      <h1 className="text-black text-2xl font-semibold mb-6">Latest Job Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-2xl border border-gray-400 p-4">
            <div className="flex items-center">
              <img src={job.logo} alt={job.title} className="w-10 h-10 mr-4" />
              <div>
                <h2 className="text-black text-lg font-medium">{job.title}</h2>
                <p className="text-black text-sm">{job.company}</p>
                <p className="text-gray-500 text-xs">{job.posted}</p>
              </div>
            </div>
            <div className="mt-4 flex text-center justify-evenly">
                <div>

              <div className="text-gray-600 text-sm">Job Type</div>
              <div className="text-black text-sm">{job.type}</div>
              <div className="text-gray-600 text-sm mt-2">CTC</div>
              <div className="text-black text-sm">{job.ctc}</div>
                </div><div>

              <div className="text-gray-600 text-sm">Industry</div>
              <div className="text-black text-sm">{job.industry}</div>
              <div className="text-gray-600 text-sm mt-2">Location</div>
              <div className="text-black text-sm">{job.location}</div>
                </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="bg-gray-200 rounded-md p-2 mr-2 lg:ml-10 text-center">
                <div className="text-gray-600 text-xs">Registration closes on</div>
                <div className="text-gray-600 text-xs font-bold">{job.registration}</div>
              </div>
              <a href="./Resume.html" className="bg-blue-600 text-white rounded-md p-2 px-6 lg:mr-10">Apply</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestJobSec;
