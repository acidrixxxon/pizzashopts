import React, { RefObject } from 'react';

import { Context1 } from '../Context/Context';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: () => void) => {
  const {
    state: { view },
  } = React.useContext(Context1);
  const listener = (event: Event) => {
    if (ref.current !== null) {
      if (ref.current.contains(event?.target as Node) || view.search.searchResultModal.status === 'visible') {
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
