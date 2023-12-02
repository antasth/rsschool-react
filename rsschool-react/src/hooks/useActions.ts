import { actions as autocompleteActions } from '@/store/CountryAutocomplite/countryAutocomplite.slice';
// import { actions as uncontrolledFormActions } from '@/store/UncontrolledForm/uncontrolledForm.slice';
import { ActionCreatorWithPayload, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const rootActions = {
  // ...uncontrolledFormActions,
  ...autocompleteActions,
};

export const useActions = (): {
  // setFormData: ActionCreatorWithPayload<string, 'uncontrolledForm/updateField'>;
  setInputValue: ActionCreatorWithPayload<string>;
} => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
