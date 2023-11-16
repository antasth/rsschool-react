import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { IGame } from '../types';

export const useGames = (): { games: IGame[] } => {
  const games = useSelector((state: RootState) => state.games);
  return { games };
};
