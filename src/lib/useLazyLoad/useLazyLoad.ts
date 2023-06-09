import { MutableRefObject, useState } from 'react';

import { useIntersectionObserver } from '../useIntersectionObserver';

type useLazyLoadType = (
  config?: IntersectionObserverInit
) => [boolean, MutableRefObject<null>];

const useLazyLoad: useLazyLoadType = (config) => {
  const [show, setShow] = useState<boolean>(false);

  const ref = useIntersectionObserver((entries, obs) => {
    const [{ isIntersecting }] = entries;
    if (isIntersecting) {
      setShow(true);
      obs.disconnect();
    }
  }, config);

  return [show, ref];
};

export default useLazyLoad;
