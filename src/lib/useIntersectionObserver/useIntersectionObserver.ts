import {useEffect, useMemo, useRef} from "react";

const useIntersectionObserver = (callback: IntersectionObserverCallback, config?: IntersectionObserverInit,) =>{
  const element = useRef(null);

  const observer = useMemo(() => new window.IntersectionObserver(callback, config), [callback, config]);

  useEffect(() => {
    if (element && element.current) {
      observer.observe(element.current as HTMLElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return {ref: element, observer }
}

export default useIntersectionObserver;
