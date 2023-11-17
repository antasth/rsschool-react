import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import { reducer as gamesReducer } from './games/games.slice';
import { reducer as pageSizeReducer } from './pageSize/pageSize.slice';
import { reducer as searchReducer } from './search/search.slice';

const reducers = combineReducers({
  search: searchReducer,
  games: gamesReducer,
  pageSize: pageSizeReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
