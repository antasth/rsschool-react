import { IUncontrolledForm } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState: [] as IUncontrolledForm[],
  reducers: {
    setUncontrolledFormData: (
      state,
      { payload }: { payload: IUncontrolledForm }
    ) => {
      const submitObject = payload;
      state.push(submitObject);
    },
  },
});

export const { actions, reducer } = uncontrolledFormSlice;
export default uncontrolledFormSlice.reducer;
