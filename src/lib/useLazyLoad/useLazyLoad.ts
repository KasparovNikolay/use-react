import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const useLazyLoad = (
  config?: IntersectionObserverInit,
): [boolean | null, MutableRefObject<null>] => {
  const [show, setShow] = useState<boolean | null>(null);
  const element = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries: Array<{ isIntersecting: boolean }>) => {
        const [{ isIntersecting }] = entries;
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      config,
    );
    if (element && element.current) {
      observer.observe(element.current as unknown as Element);
    }
    return () => {
      observer.disconnect();
    };
  }, [element]);

  return [show, element];
};
