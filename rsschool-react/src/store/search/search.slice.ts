import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISearchSlice } from '../../types';
import { getFromLocalStorage } from '../../utils';

const initialState: ISearchSlice = {
  value: getFromLocalStorage('searchString'),
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveSearchString: (state, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
  },
});

export const { actions, reducer } = searchSlice;
