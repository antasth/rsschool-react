import { IUncontrolledForm } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export const ReactHookFormSlice = createSlice({
  name: 'reactHookFormSlice',
  initialState: [] as IUncontrolledForm[],
  reducers: {
    setReactHookFormData: (
      state,
      { payload }: { payload: IUncontrolledForm }
    ) => {
      const submitObject = payload;
      state.push(submitObject);
    },
  },
});

export const { actions, reducer } = ReactHookFormSlice;
export default ReactHookFormSlice.reducer;
