import React, { useContext } from 'react';

import { Context1 } from '../Context/Context';
import { getCustomerDataActions } from '../Context/actions';
import { initialCustomerData } from '../Utils/initialStore';

export const useSetCustomerData = () => {
  const {
    dispatch,
    state: { user },
  } = useContext(Context1);
  const { setInitialCustomerData } = getCustomerDataActions(dispatch);

  React.useEffect(() => {
    user !== null
      ? setInitialCustomerData(user)
      : localStorage.getItem('customer')
      ? JSON.parse(localStorage.getItem('customer') || '{}')
      : initialCustomerData;
  }, [user]);

  return useSetCustomerData;
};
