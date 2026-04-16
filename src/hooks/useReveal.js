import { useEffect, useRef, useState } from 'react';

export const useReveal = (threshold = 0.2) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = targetRef.current;

    if (!element || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, threshold]);

  return { targetRef, isVisible };
};
