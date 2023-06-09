import { useEffect, useRef } from 'react';

const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  config?: IntersectionObserverInit
) => {
  const element = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(callback, config);
    if (element && element.current) {
      observer.observe(element.current as HTMLElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [callback, config]);

  return element;
};

export default useIntersectionObserver;
