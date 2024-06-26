import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Update import

const MessageModal = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your emailjs service ID, template ID, and user ID
    emailjs
      .sendForm(
        'service_9j6et2x',
        'template_v1lf8mm',
        e.target,
        'gIGJHf5tv4kzbhT3l'
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
            onClose(); // Close the modal after sending the message
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.error('Email sending error:', error);
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div className="modal-overlay">
      <div className="modal message-modal">
        <button className="close-btn" onClick={onClose}></button>
        <h2 className="modal-title">Send Message</h2>
        <form onSubmit={sendEmail} className="message-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" name="user_name" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" name="user_email" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea name="message" className="form-textarea" />
          </div>
          <input type="submit" value="Send" className="form-submit" disabled={isSubmitting} />
          {stateMessage && <p className="form-message">{stateMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default MessageModal;
