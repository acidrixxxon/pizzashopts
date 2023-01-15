import { useContextSelector } from '../Context/Context';
import { getCartActions, getSortActions, getUserActions, getViewActions } from '../Context/actions';
import { useContextDispatch } from './useContextDispatch';

export const useContextActions = () => {
  const dispatch = useContextDispatch();
  const state = useContextSelector();

  const cartActions = getCartActions(dispatch, state);
  const sortActions = getSortActions(dispatch);
  const viewActions = getViewActions(dispatch, state.view);
  const userActions = getUserActions(dispatch);

  return {
    cartActions,
    sortActions,
    viewActions,
    userActions,
  };
};
