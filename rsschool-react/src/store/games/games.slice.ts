import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGame, IGamesSlice } from '../../types';

const initialState: IGamesSlice = { value: [] };

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    saveGamesList: (state, { payload }: PayloadAction<IGame[]>) => {
      state.value = payload;
    },
  },
});

export const { actions, reducer } = gamesSlice;
