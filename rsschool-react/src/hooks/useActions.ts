import { ActionCreatorWithPayload, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as gameshActions } from '../store/games/games.slice';
import { actions as searchActions } from '../store/search/search.slice';
import { IGame } from '../types';

const rootActions = {
  ...searchActions,
  ...gameshActions,
};

export const useActions = (): {
  saveSearchString: ActionCreatorWithPayload<string, 'search/saveSearchString'>;
  saveGamesList: ActionCreatorWithPayload<IGame[]>;
} => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
