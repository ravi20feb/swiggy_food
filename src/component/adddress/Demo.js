import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const words = ['Hungry?','Unexpected gone wrong?','Cooking gone wrong?','Movie marathon?','Gamee night?','Late night at office?']


const Demo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
   
    <div className='anim-wrapper  w-11/12  mt-32 '>
        <div className="fade font-semibold lending-12 h-12 text-4xl tracking-tight text-dark-gray sm:text-[24px]">
        {words[currentIndex]}
      </div>
    </div> 
      
    
  
  );
};

export default Demo;
