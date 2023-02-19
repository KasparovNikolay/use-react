import { useEffect, useRef } from 'react';

type objectType = { [key: string | number]: unknown };

const useWhyDidYouUpdate = (name: string, p: unknown): void => {
  const previousProps = useRef<objectType>({});
  const props = p as objectType;
  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changesObj = {} as {[key: string]: unknown};
      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key as keyof typeof props]) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });
      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj);
      }
    }
    previousProps.current = props;
  });
};

export default useWhyDidYouUpdate;
