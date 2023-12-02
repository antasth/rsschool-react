import { COUNTRIES_LIST } from '@/constants';
import { createSlice } from '@reduxjs/toolkit';

export const countryAutocompleteSlice = createSlice({
  name: 'autocomplite',
  initialState: {
    inputValue: '',
    suggestions: COUNTRIES_LIST,
  },
  reducers: {
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    setSuggestions(state, action) {
      state.suggestions = action.payload;
    },
  },
});

export const { setInputValue, setSuggestions } =
  countryAutocompleteSlice.actions;
export default countryAutocompleteSlice.reducer;
export const { actions, reducer } = countryAutocompleteSlice;
