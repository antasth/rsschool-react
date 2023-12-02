import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countryAutocompleteReducer from './CountryAutocomplite/countryAutocomplite.slice';
import uncontrolledFormReducer from './UncontrolledForm/uncontrolledForm.slice';

const reducers = combineReducers({
  uncontrolledForm: uncontrolledFormReducer,
  autocomplete: countryAutocompleteReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
