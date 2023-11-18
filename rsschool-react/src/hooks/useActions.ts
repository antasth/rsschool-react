import { ActionCreatorWithPayload, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as loadingFlagActions } from '../store/loadingFlag/loadingFlag.slice';
import { actions as pageSizeActions } from '../store/pageSize/pageSize.slice';
import { actions as searchActions } from '../store/search/search.slice';

const rootActions = {
  ...searchActions,
  ...pageSizeActions,
  ...loadingFlagActions,
};

export const useActions = (): {
  saveSearchString: ActionCreatorWithPayload<string, 'search/saveSearchString'>;
  savePageSize: ActionCreatorWithPayload<number>;
  setIsLoading: ActionCreatorWithPayload<boolean>;
} => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
