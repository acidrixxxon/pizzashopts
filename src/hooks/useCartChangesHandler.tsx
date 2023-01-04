import React from 'react';

import { Context1 } from '../Context/Context';
import LocalStorageService from '../Services/LocalStorageService';

export function useCartChangesHandler() {
  const {
    state: { cart },
  } = React.useContext(Context1);

  React.useEffect(() => {
    LocalStorageService.saveCartUpdate(cart);
  }, [cart]);

  return useCartChangesHandler;
}
