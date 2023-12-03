import { IForm } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export const ReactHookFormSlice = createSlice({
  name: 'reactHookFormSlice',
  initialState: [] as IForm[],
  reducers: {
    setReactHookFormData: (state, { payload }: { payload: IForm }) => {
      const submitObject = payload;
      state.push(submitObject);
    },
  },
});

export const { actions, reducer } = ReactHookFormSlice;
export default ReactHookFormSlice.reducer;
