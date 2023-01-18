import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useContextActions } from '../hooks';

export function useActivateAccount() {
  const {
    viewActions: { setAuthModalStatus },
  } = useContextActions();

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
