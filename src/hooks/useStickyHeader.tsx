import React, { RefObject } from 'react';

export const useStickyHeader = <T extends HTMLElement = HTMLElement>(refEl: RefObject<T>) => {
  React.useEffect(() => {
    const onScroll = (e: any) => {
      const scrollTop = window.scrollY;
      if (refEl !== null) {
        scrollTop >= 70 ? refEl.current?.classList.add('is-sticky') : refEl.current?.classList.remove('is-sticky');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return useStickyHeader;
};
