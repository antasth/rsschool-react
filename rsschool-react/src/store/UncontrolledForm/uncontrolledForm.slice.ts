import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IUncontrolledForm {
  name: string;
  age: string;
  email: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  terms: boolean;
  country: string;
}

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState: { formData: {} as IUncontrolledForm },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});
export const { setFormData } = uncontrolledFormSlice.actions;
export const selectFormData = (state: RootState): IUncontrolledForm =>
  state.uncontrolledForm.formData;
export default uncontrolledFormSlice.reducer;
// export const { setFormData } = uncontrolledFormSlice.actions;

export const { actions, reducer } = uncontrolledFormSlice;
// export const selectFormData = (state) => state.uncontrolledForm.formData;
