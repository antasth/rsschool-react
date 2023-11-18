import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILoadingFlagSlice } from '../../types';

const initialState: ILoadingFlagSlice = {
  value: false,
};

export const loadingFlag = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.value = payload;
    },
  },
});

export const { actions, reducer } = loadingFlag;
