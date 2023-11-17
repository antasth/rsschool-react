import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_PAGE_SIZE } from '../../constants';
import { IPageSizeSlice } from '../../types';

const initialState: IPageSizeSlice = {
  value: DEFAULT_PAGE_SIZE,
};

export const PageSize = createSlice({
  name: 'pageSize',
  initialState,
  reducers: {
    savePageSize: (state, { payload }: PayloadAction<number>) => {
      state.value = payload;
    },
  },
});

export const { actions, reducer } = PageSize;
