import React from 'react';

import { Context1 } from '../Context/Context';

export const useContextDispatch = (): React.Dispatch<any> => {
  const { dispatch } = React.useContext(Context1);

  return dispatch;
};
