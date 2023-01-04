import React from 'react';

import { SET_SOCKET } from '../constans';

interface IActions {
  setSocket: (socket: any | null) => void;
}

export const getSocketActions = (dispatch: React.Dispatch<any>): IActions => {
  const setSocket = (socket: any | null) => {
    dispatch({ type: SET_SOCKET, payload: socket });
  };

  return {
    setSocket,
  };
};
