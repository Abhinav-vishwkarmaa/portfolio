import { useState, useEffect, useCallback } from 'react';

export const useTypewriter = (text, speed = 50, startDelay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Reset when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    if (currentIndex === 0 && startDelay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(1);
      }, startDelay);
      return () => clearTimeout(delayTimer);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex));
        setCurrentIndex(prev => {
          if (prev >= text.length) {
            setIsComplete(true);
            return prev;
          }
          return prev + 1;
        });
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, startDelay]);

  const restart = useCallback(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, []);

  return { displayText, isComplete, restart };
};