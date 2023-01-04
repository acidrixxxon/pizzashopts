import React, { RefObject, useContext } from 'react';
import { io } from 'socket.io-client';

import { Context1 } from '../Context/Context';
import { getSocketActions } from '../Context/actions';
import { BACKEND_URL } from '../Utils/vars';

const useSetSocket = () => {
  const {
    dispatch,
    state: { socket },
  } = useContext(Context1);
  const { setSocket } = getSocketActions(dispatch);

  React.useEffect(() => {
    const socket = io(`${BACKEND_URL}`);
    setSocket(socket);
  }, []);

  React.useEffect(() => {
    if (socket) {
      socket.on('recieve_message', (data: any) => console.log(data));
      socket.on('db_change', (data: any) => console.log(data));
      socket.on('sidesCategory_change', (data: any) => console.log(data));
    }
  }, [socket]);
};

export default useSetSocket;
