import React, { useState } from 'react';
import TVImage from '../tv.png';
import TVModal from '../components/modals/TVModal'; // Import the Speaker modal component

const TV = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="tv" onClick={toggleModal}>
      <div class="label">Play Videos</div>
      <img src={TVImage} alt="TV" />
      </div>
      {isModalOpen && <TVModal onClose={toggleModal} />}
    </>
  );
}

export default TV;
