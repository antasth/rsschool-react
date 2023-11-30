// import { actions as uncontrolledFormActions } from '@/store/UncontrolledForm/uncontrolledForm.slice';
// import { ActionCreatorWithPayload, bindActionCreators } from '@reduxjs/toolkit';
// import { useMemo } from 'react';
// import { useDispatch } from 'react-redux';

// const rootActions = {
//   ...uncontrolledFormActions,
// };

// export const useActions = (): {
//   setFormData: ActionCreatorWithPayload<string, 'uncontrolledForm/updateField'>;
// } => {
//   const dispatch = useDispatch();

//   return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
// };
