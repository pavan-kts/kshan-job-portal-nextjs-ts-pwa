"use client";
import React, { useState } from "react";
import ApplyModal from "./ApplyModal";
import Link from "next/link";

const LatestJobSec: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const handleApply = () => {
    console.log("Successfully Applied");
    //Logic for apply goes here
    setIsModalVisible(false);
  };

  const jobs = [
    {
      id: 1,
      logo: "/assets/img/Tata_logo 1.png",
      title: "Software Engineer",
      company: "TCS NQT",
      posted: "a day ago",
      type: "Full Time",
      ctc: "INR 5,40,000",
      industry: "IT/ Computers-Software",
      location: "Pune, Maharashtra",
      registration: "17 Apr, 2024 - 03:00 PM",
    },
    {
      id: 2,
      logo: "/assets/img/kts.png",
      title: "Senior QA",
      company: "Kshan Tech Soft",
      posted: "2 days ago",
      type: "Part Time",
      ctc: "INR 8,40,000",
      industry: "IT/ Computers-Software",
      location: "Pune, Maharashtra",
      registration: "20 Apr, 2024 - 03:00 PM",
    },
    {
      id: 3,
      logo: "/assets/img/Tata_logo 3.png",
      title: "Finance Executive",
      company: "FIS Global",
      posted: "a day ago",
      type: "Internship",
      ctc: "INR 5,40,000",
      industry: "Financial",
      location: "Remotely",
      registration: "17 Apr, 2024 - 03:00 PM",
    },
    {
      id: 4,
      logo: "/assets/img/Tata_logo 1.png",
      title: "Software Engineer",
      company: "TCS NQT",
      posted: "a day ago",
      type: "Full Time",
      ctc: "INR 5,40,000",
      industry: "IT/ Computers-Software",
      location: "Pune, Maharashtra",
      registration: "17 Apr, 2024 - 03:00 PM",
    },
    {
      id: 5,
      logo: "/assets/img/kts.png",
      title: "Senior QA",
      company: "Kshan Tech Soft",
      posted: "2 days ago",
      type: "Part Time",
      ctc: "INR 8,40,000",
      industry: "IT/ Computers-Software",
      location: "Pune, Maharashtra",
      registration: "20 Apr, 2024 - 03:00 PM",
    },
    {
      id: 6,
      logo: "/assets/img/Tata_logo 3.png",
      title: "Finance Executive",
      company: "FIS Global",
      posted: "a day ago",
      type: "Internship",
      ctc: "INR 5,40,000",
      industry: "Financial",
      location: "Remotely",
      registration: "17 Apr, 2024 - 03:00 PM",
    },
    // ...other jobs
  ];

  return (
    <div className="bg-[#E9F4FA] dark:bg-gray-900 p-8">
      <h1 className="text-black dark:text-white text-2xl font-semibold mb-6">
        Latest Job Listing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-400 dark:border-gray-700 p-4"
          >
            <Link href={"/job-details"}>
              <div className="flex items-center">
                <img
                  src={job.logo}
                  alt={job.title}
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h2 className="text-black dark:text-white text-lg font-medium">
                    {job.title}
                  </h2>
                  <p className="text-black dark:text-gray-400 text-sm">
                    {job.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-600 text-xs">
                    {job.posted}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex text-center justify-evenly">
                <div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    Job Type
                  </div>
                  <div className="text-black dark:text-white text-sm">
                    {job.type}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    CTC
                  </div>
                  <div className="text-black dark:text-white text-sm">
                    {job.ctc}
                  </div>
                </div>
                <div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    Industry
                  </div>
                  <div className="text-black dark:text-white text-sm">
                    {job.industry}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Location
                  </div>
                  <div className="text-black dark:text-white text-sm">
                    {job.location}
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-4 flex justify-between items-center">
              <Link href={"job-details"}>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 mr-2 lg:ml-10 text-center">
                  <div className="text-gray-600 dark:text-gray-400 text-xs">
                    Registration closes on
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-xs font-bold">
                    {job.registration}
                  </div>
                </div>
              </Link>
              <button
                onClick={handleOpenModal}
                className="bg-blue-600 dark:bg-blue-500 text-white rounded-md p-2 px-6 lg:mr-10 hover:bg-blue-700 dark:hover:bg-blue-400"
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
      <ApplyModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onApply={handleApply}
      />
    </div>
  );
};

export default LatestJobSec;
