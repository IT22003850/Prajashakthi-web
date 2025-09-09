import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ children, className }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`${className} transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;