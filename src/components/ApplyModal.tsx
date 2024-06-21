import React, { useEffect, useState } from 'react';

interface ApplyModalProps {
  isVisible: boolean;
  onClose: () => void;
  onApply: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isVisible, onClose, onApply }) => {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [checked, setChecked] = useState({ declaration: false, awareness: false });
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if ((event.target as Element).closest('#modal-content') === null) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeUploaded(true);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setChecked(prev => ({ ...prev, [name]: checked }));
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div id="modal-content" className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upload Resume</label>
        <input
          type="file"
          onChange={handleUpload}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Default Resume</label>
        <div className="mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md">
          <span className="block truncate">{resumeUploaded ? 'Resume Uploaded' : 'Resume'}</span>
          {resumeUploaded && <button className="text-blue-500 ml-2">View</button>}
        </div>
      </div> */}
      <div className="mb-4">
        <label className="inline-flex items-start">
          <input
            type="checkbox"
            name="declaration"
            checked={checked.declaration}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <span className="ml-2 text-gray-700 dark:text-gray-300">I declare that the information provided by me is correct. In case of any discrepancies are found, I will be solely responsible and may be liable for disciplinary action.</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-start">
          <input
            type="checkbox"
            name="awareness"
            checked={checked.awareness}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <span className="ml-2 text-gray-700 dark:text-gray-300">I am aware that absence after registering for the recruitment drive could make me ineligible to participate in future.</span>
        </label>
      </div>
        <button
          onClick={onApply}
          className="bg-blue-600 text-white rounded-md p-2 px-6 hover:bg-blue-700 mr-4"
        >
          Apply
        </button>
        <button
          onClick={onClose}
          className="bg-red-600 text-white rounded-md p-2 px-6 hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ApplyModal;
