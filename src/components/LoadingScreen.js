import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('enter');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase('show');
    }, 500);

    const timer2 = setTimeout(() => {
      setAnimationPhase('exit');
    }, 2500);

    const timer3 = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${animationPhase}`}>
      <div className="loading-content">
        <div className="loading-image-container">
          <img 
            src="/images/anas-ali.jpg" 
            alt="Anas Ali" 
            className="loading-image"
          />
          <div className="loading-image-border"></div>
        </div>
        
        <div className="loading-text">
          <h1 className="loading-name">Anas Ali</h1>
          <p className="loading-title">Full Stack Developer</p>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
      
      <div className="loading-background">
        <div className="bg-particle particle-1"></div>
        <div className="bg-particle particle-2"></div>
        <div className="bg-particle particle-3"></div>
        
        <div className="code-element code-1">
          {'{ developer: "Anas Ali" }'}
        </div>
        <div className="code-element code-2">
          {'const skills = ["React", "Node.js"];'}
        </div>
        <div className="code-element code-3">
          {'function() { return "Full Stack"; }'}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;