import React, { useState } from 'react';
import './Envelope.css';

const Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className={`envelope-container ${isOpen ? 'open' : ''}`}>
      <div 
        className="envelope" 
        onClick={handleEnvelopeClick}
      >
        <div className="envelope-back"></div>
        <div className="envelope-front">
          <div className="envelope-flap"></div>
          <div className="envelope-pocket"></div>
        </div>
      </div>
      
      <div className={`letter ${isOpen ? 'letter-open' : ''}`}>
        <div className="letter-content">
          <h1>Happy Monthsary</h1>
          <p>
            happy monthsary babyy di kaman naka sama sa venue ng graduation mo kasama
            ka paden naman sapuso ko malapit na tayong magkita ulit ilang weeks nalang
            sawakas mayayakap na ulit kita mahahalikan iloveyou baby mahal na mahal kita
            andito lang ako lagi para sayo diko alam pano yung mahbang message
            sorry agad iloveyouuuuuuu
          </p>
          <div className="heart-container">
            <div className="heart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;