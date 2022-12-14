import React, { RefObject } from 'react';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: () => void) => {
  const listener = (event: any): void => {
    if (event.target.id === 'modal') return;
    if (ref.current !== null) {
      if (ref.current.contains(event?.target as Node)) {
        return;
      }

      handler();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, []);
};

export default useOutsideClick;
