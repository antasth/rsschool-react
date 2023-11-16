import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGame } from '../../types';

const initialState: IGame[] = [];

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    saveGamesList: (state, { payload }: PayloadAction<IGame[]>) => {
      console.log(payload);

      // state.push(payload.value);
    },
  },
});

export const { actions, reducer } = gamesSlice;
