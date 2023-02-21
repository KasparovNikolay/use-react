import { MutableRefObject, useState } from 'react';

import { useIntersectionObserver } from '../useIntersectionObserver';

type useLazyLoadType = (
  config?: IntersectionObserverInit
) => [boolean | null, MutableRefObject<null>];

const useLazyLoad: useLazyLoadType = (config) => {
  const [show, setShow] = useState<boolean | null>(null);

  const { ref, observer } = useIntersectionObserver((entries, obs) => {
    const [{ isIntersecting }] = entries;
    if (isIntersecting) {
      setShow(true);
      observer.disconnect();
    }
  }, config);

  return [show, ref];
};

export default useLazyLoad;
