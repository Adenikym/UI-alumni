import React, { useState } from 'react';
import MyModal from './MyModal';
import CloseIcon from '@mui/icons-material/Close';

const MainModal= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button
        className="bg-[#234CEB] text-white font-bold py-2 px-4 rounded-md"
        onClick={handleButtonClick}
      >
        Donate Here
      </button>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-[#00000066] bg-opacity-40">
          {/* Modal content goes here */}
          <div className="flex mt-20 justify-center items-center">
            <div className="bg-white w-[60vw] h-[60vh] p-8 bg-opacity-1 rounded-lg shadow-lg border-8 border-[#0000004d]">
              <MyModal/>
              <div
                className="fixed top-0 right-0 m-4"
                onClick={() => setIsModalOpen(false)}
              >
                <CloseIcon className="text-gray-700 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainModal;
