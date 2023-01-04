import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getViewActions } from '../Context/actions';
import { Context1 } from '../Context/Context';

export function useActivateAccount() {
  const { dispatch } = React.useContext(Context1);
  const { setAuthModalStatus } = getViewActions(dispatch);

  const { search } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const authModalShow = search.split('=')[1];
    if (authModalShow === 'active') {
      setAuthModalStatus('active');
      navigate('/', { replace: true });
    }
  }, []);

  return useActivateAccount;
}
