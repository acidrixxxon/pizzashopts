import { useActivateAccount } from './useActivateAccount';
import { useCartChangesHandler } from './useCartChangesHandler';
import { useSetCustomerData } from './useSetCustomerData';

export const useInitApp = (): void => {
  useActivateAccount();
  useCartChangesHandler();
  useSetCustomerData();
};
