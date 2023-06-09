import { useEffect } from 'react';

export const useTimeout = (callback: () => void, delay = 300, deps = []) => {
  useEffect(() => {
    const timeoutId = setTimeout(callback, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, deps);
};
