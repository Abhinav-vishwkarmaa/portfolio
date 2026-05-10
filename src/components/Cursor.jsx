import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target;
      if (target.closest('button, a, .cyber-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div 
          animate={{ 
            width: isHovering ? 60 : 8,
            height: isHovering ? 60 : 8,
            backgroundColor: isHovering ? 'rgba(255,255,255,0.1)' : '#fff',
            border: isHovering ? '1px solid rgba(255,255,255,0.5)' : 'none'
          }}
          className="rounded-full"
        />
        {isHovering && (
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-1 h-1 bg-white rounded-full" />
           </div>
        )}
      </motion.div>
      
      {/* Ripple Effect */}
      {clicked && (
        <motion.div
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-20 h-20 border border-white rounded-full pointer-events-none z-[9997] mix-blend-difference"
          style={{ left: position.x, top: position.y, translateX: '-50%', translateY: '-50%' }}
        />
      )}
    </>
  );
};

export default Cursor;
