import { IGame, IGamesResponseObject } from '../types/types';

export const getGames = async (search: string, page = 1): Promise<IGame[]> => {
  const response = await fetch(
    `https://api.rawg.io/api/games?page=${page}&search=${search}&key=83b4eabf3167483aa7ee90180948e7a8`
  );
  const games: IGamesResponseObject = await response.json();
  console.log('getGames', games);

  return games.results;
};
