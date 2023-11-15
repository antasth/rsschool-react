import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as searchReducer } from './search/search.slice';

const reducers = combineReducers({
  search: searchReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
