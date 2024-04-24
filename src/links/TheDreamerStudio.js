import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

import Mailbox from '../components/MailBox';
import Moon from '../components/Moon';
import Studio from '../components/Studio';
import Profile from '../components/Profile';


function TheDreamerStudio() {
  return (
    <div>
      <AnimatedBackground />
      <div className="container">
      <div className="column">
        <Mailbox />
      </div>
      <div className="column">
        <Moon />
        <Studio />
      </div>
      <div className="column">
      </div>
      </div>
    </div>
  );
}

export default TheDreamerStudio;
