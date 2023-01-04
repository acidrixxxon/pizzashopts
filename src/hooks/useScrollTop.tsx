import React from 'react';

export const useScrollTop = (ref: React.RefObject<HTMLDivElement> | null) => {
  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      if (ref !== null) {
        scrollTop >= 70 ? ref.current?.classList.add('padding-top') : ref.current?.classList.remove('padding-top');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return [];
};
