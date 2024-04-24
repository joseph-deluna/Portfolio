import React, { useRef, useState } from 'react';

const SpeakerModal = ({ onClose }) => {
  
  


  return (
    <div className="modal speaker-modal">
      <button className="close-btn" onClick={onClose}></button>
      <div className="modal-content">
        {/* Add iframe for Spotify playlist */}
        <iframe src="https://open.spotify.com/embed/playlist/3O8ZstDuyQoevDwysjWJER?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default SpeakerModal;
