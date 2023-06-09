import { useEffect, useRef } from 'react';

type objectType = { [key: string | number]: unknown };

const useWhyDidYouUpdate = (name: string, p: unknown): void => {
  const previousProps = useRef<objectType>({});
  const props = p as objectType;

  useEffect(() => {
    if (previousProps.current) {
      const changesObj = new Map();

      for (const key in { ...previousProps.current, ...props }) {
        if (previousProps.current[key] !== props[key as keyof typeof props]) {
          changesObj.set(key, {
            from: previousProps.current[key],
            to: props[key],
          });
        }
      }

      if (changesObj.size) {
        console.log('[why-did-you-update]', name, changesObj);
      }
    }
    previousProps.current = props;
  });
};

export default useWhyDidYouUpdate;
