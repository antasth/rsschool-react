import { combineReducers, configureStore } from '@reduxjs/toolkit';
import uncontrolledFormReducer from './UncontrolledForm/uncontrolledForm.slice';

const reducers = combineReducers({
  uncontrolledForm: uncontrolledFormReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
