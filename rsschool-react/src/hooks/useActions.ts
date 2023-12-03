import { actions as autocompleteActions } from '@/store/CountryAutocomplite/countryAutocomplite.slice';
import { actions as reactHookFormActions } from '@/store/ReactHookForm/ReactHookForm.slice';
import { actions as uncontrolledFormActions } from '@/store/UncontrolledForm/uncontrolledForm.slice';
import { IForm } from '@/types';
import { ActionCreatorWithPayload, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const rootActions = {
  ...uncontrolledFormActions,
  ...reactHookFormActions,
  ...autocompleteActions,
};

export const useActions = (): {
  setUncontrolledFormData: ActionCreatorWithPayload<
    IForm,
    'uncontrolledForm/setUncontrolledFormData'
  >;
  setReactHookFormData: ActionCreatorWithPayload<
    IForm,
    'reactHookFormSlice/setReactHookFormData'
  >;
  setInputValue: ActionCreatorWithPayload<string>;
} => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
