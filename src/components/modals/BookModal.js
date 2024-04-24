import React from 'react';
import book1Image from '../../images/book1.jpg'; // Import book cover images
import book2Image from '../../images/book2.jpg'; // Import book cover images
import book3Image from '../../images/book3.jpg'; // Import book cover images
import book4Image from '../../images/book4.jpg'; // Import book cover images
import book5Image from '../../images/book5.jpg'; // Import book cover images
import book6Image from '../../images/book6.jpg'; // Import book cover images
import book7Image from '../../images/book7.jpg'; // Import book cover images
// Import other book cover images as needed

const BookModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal book-modal">
        <button className="close-btn" onClick={onClose}></button>
        <div className="modal-content">
          <h2>Books I've Read</h2>
          <div className="book-list">
            <div className="book">
              <img src={book1Image} alt="Book 1" />
              <p>Author: Author 1</p>
            </div>
            <div className="book">
              <img src={book2Image} alt="Book 2" />
              <p>Author: Author 2</p>
            </div>
            <div className="book">
              <img src={book3Image} alt="Book 2" />
              <p>Author: Author 2</p>
            </div>
            <div className="book">
              <img src={book4Image} alt="Book 2" />
              <p>Author: Author 2</p>
            </div>
            <div className="book">
              <img src={book5Image} alt="Book 2" />
              <p>Author: Author 2</p>
            </div>
            <div className="book">
              <img src={book6Image} alt="Book 2" />
              <p>Author: Author 2</p>
            </div>
            <div className="book">
              <img src={book7Image} alt="Book 2" />
              <p>Author: Author 2</p>
            </div>
            {/* Add other books as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookModal;
