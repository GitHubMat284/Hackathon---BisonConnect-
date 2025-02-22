import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render anything if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Explore Upcoming Events
        </h2>
        <p className="text-center text-lg font-medium text-gray-600 mt-4">
          Here are some of the events you can look forward to on campus. Stay tuned for more details!
        </p>
        <div className="mt-4">
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Workshops and Seminars</li>
            <li>Volunteer Opportunities</li>
            <li>Networking Events</li>
            <li>Social Gatherings</li>
            <li>Club Activities</li>
          </ul>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 active:bg-blue-800 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
