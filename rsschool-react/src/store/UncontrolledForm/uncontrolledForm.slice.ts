import { IForm } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState: [] as IForm[],
  reducers: {
    setUncontrolledFormData: (state, { payload }: { payload: IForm }) => {
      const submitObject = payload;
      state.push(submitObject);
    },
  },
});

export const { actions, reducer } = uncontrolledFormSlice;
export default uncontrolledFormSlice.reducer;
