import React from 'react';
import Envelope from './components/Envelope';
import { HeartIcon } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="background-hearts">
        {Array(20).fill(0).map((_, i) => (
          <HeartIcon 
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.5 + 0.1,
              transform: `scale(${Math.random() * 0.4 + 0.4})`,
            }}
          />
        ))}
      </div>
      <div className="content">
        <h1 className="title">For My Special Someone</h1>
        <p className="subtitle">Click the envelope to open</p>
        <Envelope />
      </div>
    </div>
  );
}

export default App;