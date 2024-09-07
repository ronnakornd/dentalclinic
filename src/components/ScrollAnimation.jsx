// src/ScrollAnimation.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, useScroll } from 'react-spring';

const ScrollAnimation = () => {
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef();

  const [{ transform }, set] = useSpring(() => ({
    transform: 'translateX(0%)',
    config: { duration: 500 },
    onRest: () => setAnimationInProgress(false),
  }));

  
  return (
    <div ref={containerRef} style={{ height: '200vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <animated.image 
        style={{
          transform,
          width: '500px'
        }}
      >
        <img src="/invisalign.png" alt="" />
      </animated.image>
    </div>
  );
};

export default ScrollAnimation;
