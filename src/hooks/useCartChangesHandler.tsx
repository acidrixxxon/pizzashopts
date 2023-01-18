import React from 'react';

import { useContextSelector } from '../Context/Context';
import LocalStorageService from '../Services/LocalStorageService';

export function useCartChangesHandler() {
  const { cart } = useContextSelector();

  React.useEffect(() => {
    LocalStorageService.saveCartUpdate(cart);
  }, [cart]);

  return useCartChangesHandler;
}
