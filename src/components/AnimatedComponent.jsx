// src/AnimatedComponent.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedComponent = ({ inView }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translate(200px,500px)' },
    to: { opacity: 1, transform: 'translate(0px,50px)' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={props} className="animated-box text-5xl">
      จัดฟันใส
    </animated.div>
  );
};

export default AnimatedComponent;
