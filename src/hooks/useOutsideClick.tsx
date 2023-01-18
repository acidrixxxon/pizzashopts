import React, { RefObject } from 'react';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: () => void) => {
  const listener = (event: any): void => {
    const el = ref?.current;

    if (event.target.id === 'modal') return;
    if (!el || el.contains(event?.target as Node)) {
      return;
    }

    handler();
  };

  React.useEffect(() => {
    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, []);
};

export default useOutsideClick;
