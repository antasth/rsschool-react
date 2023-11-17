import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: { value: number } = {
  value: 0,
};

export const PageSize = createSlice({
  name: 'pageSize',
  initialState,
  reducers: {
    setPageSize: (state, { payload }: PayloadAction<number>) => {
      state.value = payload;
    },
  },
});
