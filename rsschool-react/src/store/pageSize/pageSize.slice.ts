import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: { value: number } = {
  value: 0,
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
