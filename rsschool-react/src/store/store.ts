import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as gamesReducer } from './games/games.slice';
import { reducer as searchReducer } from './search/search.slice';

const reducers = combineReducers({
  search: searchReducer,
  games: gamesReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
