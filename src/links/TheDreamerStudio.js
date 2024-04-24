import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

import Moon from '../components/Moon';
import Studio from '../components/Studio';
import Profile from '../components/Profile';


function TheDreamerStudio() {
  return (
    <div>
      <AnimatedBackground />
      <div className="container2">
        <Moon />
        <Studio />
      </div>
    </div>
  );
}

export default TheDreamerStudio;
