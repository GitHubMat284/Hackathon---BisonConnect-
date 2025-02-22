import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render anything if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <h2 className="text-lg font-bold">Possible Events</h2>
        <p className="font-bold">These are some possible events held on our campus. Stay tuned!</p>
        <div className="flex justify-center">
        <ul className="list-disc mt-2 list-inside text-black-800 text center">
        <li>Workshops and seminars</li>
        <li>Volunteer opportunities</li>
        <li>Networking events</li>
        <li>Socials and parties</li>
        <li>Dancing clubs</li>
        
      </ul>
      </div>
      <div className="flex justify-center mt-4">
        <button 
          onClick={onClose} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
