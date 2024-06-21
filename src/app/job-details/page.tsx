"use client";
import ApplyModal from "@/components/ApplyModal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

const JobDetailsPage: React.FC = () => {
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
  return (
    <>
      <Navbar />
      <div className="relative w-full h-full p-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/assets/img/Rectangle 50.png"
            alt="Banner"
            width={1202}
            height={229}
            className="w-full h-[12.5rem] mx-auto"
          />
          <div className="flex flex-col lg:flex-row">
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg mt-8 p-8">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 shadow-lg rounded-md overflow-hidden">
                  <Image
                    src="/assets/img/Tata_logo 4.png"
                    alt="Tata Logo"
                    width={40}
                    height={39}
                    className="w-full h-full object-contain filter blur-2"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-black dark:text-white">
                    Software Engineer
                  </h2>
                  <p className="text-sm font-normal text-black dark:text-gray-400">
                    TCS NQT
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex space-x-8">
                  <div>
                    <h3 className="text-sm font-normal mb-1 text-black dark:text-gray-400">
                      Job Type
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-1 text-xs text-gray-500 dark:text-gray-300">
                      Full Time
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-normal mb-1 text-black dark:text-gray-400">
                      Location
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-1 text-xs text-gray-500 dark:text-gray-300">
                      Pune, Maharashtra
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-normal mb-1 text-black dark:text-gray-400">
                    Descriptions
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300">
                    TCS NQT follows an Integrated Test Pattern for Prime,
                    Digital and Ninja fresher hiring at TCS. Candidates need to
                    appear for a single test and based on the test performance,
                    they will qualify for Prime, Digital or Ninja interviews.
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-normal mb-1 text-black dark:text-gray-400">
                    Other Details
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300 space-y-4">
                    <p>
                      Courses & Disciplines: TCS NQT is exclusively open for
                      candidates from the batch of 2024 with the following
                      academic degrees: Bachelor of Technology (B.Tech.) /
                      Bachelor of Engineering (B.E.) / Master of Technology
                      (M.Tech.) / Master of Engineering (M.E.) / Master of
                      Computer Applications (M.C.A.) / Master of Science (M.Sc.
                      / M.S.) in any specialization offered by AICTE / UGC
                      recognized universities / colleges.
                    </p>
                    <p>
                      Course Types: Only Full-Time courses will be considered
                      (Part Time / Correspondence Courses will not be
                      considered).
                    </p>
                    <p>
                      Open Schooling: Candidates who have completed their
                      Secondary and / or Senior Secondary course from NIOS
                      (National Institute of Open Schooling) are also eligible
                      to apply if the graduation and post-graduation (if
                      applicable) courses are done full-time.
                    </p>
                    <p>
                      Percentage: Minimum 60% or 6 CGPA throughout academics
                      including the highest qualification, till the latest
                      semester for which results have been declared at the time
                      of appearing now for the test process. If selected, the
                      offer will be valid only if the degree / provisional
                      degree certificate clearly states that the student has
                      cleared Engineering in &apos;First Class&apos; after
                      completion of the course, at the time of joining.
                    </p>
                    <p>
                      Backlogs / Arrears / ATKT: The candidates should not have
                      any pending or active backlog / arrear / ATKT at the time
                      of appearing for the TCS Selection process. If selected,
                      no pending backlogs / arrears / ATKT will be permitted at
                      the time of joining TCS. All pending backlogs / arrears /
                      ATKT should be cleared within the course duration
                      stipulated by the University.
                    </p>
                    <p>
                      Extended Education: No extended education allowed.
                      Candidates should have completed the course in the
                      stipulated course duration.
                    </p>
                    <p>
                      Gap / Break in Education: It is mandatory to declare
                      academic gaps if any, during the period of education.
                      Break in education should not be due to extended education
                      (examinations cleared after the time stipulated by the
                      Board / University). Any break in education should not
                      exceed 24 months and is permissible only for valid
                      reasons. Relevant document proof, as applicable, will be
                      checked for gaps in education.
                    </p>
                    <p>
                      Work Experience: Students with prior work experience of up
                      to two years are eligible to apply for this hiring process
                      (Applicable only for postgraduate students).
                    </p>
                    <p>
                      Age: A student should be 18 to 28 years of age to
                      participate in this hiring event.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <h3 className="text-lg font-medium text-black dark:text-white">
                    Eligibility Criteria
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300">
                    Minimum 60% or 6 CGPA throughout academics with no live
                    backlog
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <h3 className="text-lg font-medium text-black dark:text-white">
                    Selection Process Details
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300">
                    Online Test followed by Personal interviews
                  </div>
                </div>
              </div>
              <div className="mt-8 flex">
                <button
                  onClick={handleOpenModal}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Apply Now
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:mx-10 items-center">
              <div className="mt-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex flex-col items-center text-center">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  Registration Schedule
                </h3>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Opens: 11:00 AM, 10-Apr-2024
                  <br />
                  Closes: 06:00 PM, 18-Apr-2024
                </div>
                <div className="mt-4 text-sm text-black dark:text-white">
                  Registration Details
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Students Must Register on Link Provided after applying for
                  this Opportunity...
                </p>
              </div>
              <div className="mt-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex flex-col items-center text-center">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  About the Organisation
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Building greater futures through innovation and collective
                  knowledge Tata Consultancy Services is an IT services,
                  consulting and business solutions....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ApplyModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onApply={handleApply}
      />
      <Footer/>
    </>
  );
};

export default JobDetailsPage;
