import { ActionCreatorWithPayload, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as searchActions } from '../store/search/search.slice';

const rootActions = {
  ...searchActions,
};

export const useActions = (): {
  saveSearchString: ActionCreatorWithPayload<string, 'search/saveSearchString'>;
} => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
