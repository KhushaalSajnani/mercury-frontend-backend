import { useInView } from 'react-intersection-observer';
import React, { ReactNode } from 'react';
import './AnimatedSectionCSS.css'

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the root margin based on your needs
  });

  return (
    <div ref={ref} className={`animatedSection ${inView ? 'animate' : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
