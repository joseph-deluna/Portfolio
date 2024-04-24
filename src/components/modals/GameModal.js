import React from 'react';

// Import your game images
import game1Image from '../../images/game0.jpg';
import game2Image from '../../images/game1.jpg';
import game3Image from '../../images/game2.jpg';
import game4Image from '../../images/game3.jpg';
import game5Image from '../../images/game4.jpg';
import game6Image from '../../images/game5.jpg';
import game7Image from '../../images/game6.png';
import game8Image from '../../images/game7.png';
import game9Image from '../../images/game8.jpg';
import game10Image from '../../images/game9.jpg';
import game11Image from '../../images/game10.png';
import game12Image from '../../images/game11.jpg';
import game13Image from '../../images/game12.jpg';

import console1Logo from '../../images/console1.png';
import console2Logo from '../../images/console2.png';
import console3Logo from '../../images/console3.png';

// Import more game images as needed

const GameModal = ({ onClose }) => {
  // Define an array of objects containing game titles and image URLs
  const gameData = [
    { id: 1, title: 'Pirate King Online', imageUrl: game1Image, console: 'Console 1', consoleLogo: console1Logo },
    { id: 2, title: 'Megaman X3', imageUrl: game2Image, console: 'Console 2', consoleLogo: console2Logo },
    { id: 3, title: 'Pokemon Yellow', imageUrl: game3Image, console: 'Console 3', consoleLogo: console3Logo },
    { id: 4, title: 'Pokemon Emerald', imageUrl: game4Image, console: 'Console 1', consoleLogo: console1Logo },
    { id: 5, title: 'Dragonfable', imageUrl: game5Image, console: 'Console 2', consoleLogo: console2Logo },
    { id: 6, title: 'Flyff', imageUrl: game6Image, console: 'Console 3', consoleLogo: console3Logo },
    { id: 7, title: 'Dota2', imageUrl: game7Image, console: 'Console 1', consoleLogo: console1Logo },
    { id: 8, title: 'Heroes of Newerth', imageUrl: game8Image, console: 'Console 1', consoleLogo: console1Logo },
    { id: 9, title: 'Monster Hunter Freedom', imageUrl: game9Image, console: 'Console 1', consoleLogo: console1Logo },
    { id: 10, title: 'GodsEater', imageUrl: game10Image, console: 'Console 1', consoleLogo: console1Logo },
    { id: 11, title: 'Skyrim', imageUrl: game11Image, console: 'Console 1', consoleLogo: console1Logo },
    { id: 12, title: 'Bloodborne', imageUrl: game12Image, console: 'Console 1', consoleLogo: console1Logo },
    { id: 13, title: 'Fallout 4', imageUrl: game13Image, console: 'Console 1', consoleLogo: console1Logo },
    // Add more game objects as needed
  ];

  return (
    <div className="modal-overlay">
      <div className="modal game-modal">
        <button className="close-btn" onClick={onClose}></button>
        <h2 className="modal-title">Games Played</h2>
        <div className="game-list">
          {gameData.map((game) => (
            <div key={game.id} className="game-card">
              <img src={game.imageUrl} alt={game.title} className="game-image" />
              <div className="game-details">
                <div className="console-info">
                  <img src={game.consoleLogo} alt={game.console} className="console-logo" />
                  <p className="game-title">{game.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameModal;
