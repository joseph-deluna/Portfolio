import React from 'react';

// Components
import Speaker from '../components/Speaker';
import TV from '../components/TV';
import Books from '../components/Books';
import Profile from '../components/Profile';
import Window from '../components/Window';
import Picture from '../components/Picture';
import Message from '../components/Message.js';
import Work from '../components/Work';
import Games from '../components/Games';

function Jose() {
  return (
    <div className="jose">
      <h1>I'm Joseph, Welcome to my Portfolio</h1>
      <div className="container side-nav">
      <div className="column">
        {/* 3 rows */}
        <div className="row">
        <Books />
        </div>
        <div className="row">
        <Speaker />
        </div>
        <div className="row">
        <TV />
        </div>
      </div>
      <div className="column">
        {/* 1 row */}
        <div className='row'>
          <Window />
        </div>
        <div className='row'>
        <Profile />
        </div>
        
      </div>
      <div className="column">
        {/* 1 row */}
        <Picture />
      </div>
      <div className="column">
        {/* 3 rows */}
        <div className="row">
        <Message />
        </div>
        <div className="row">
        <Games />
        </div>
        <div className="row">
        <Work />
        </div>
      </div>
      </div>
    </div>

  );
}

export default Jose;