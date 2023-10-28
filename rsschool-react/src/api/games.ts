import { IGame, IGamesResponseObject } from '../types/types';

export const getGames = async (page: number): Promise<IGame[]> => {
  const response = await fetch(
    `https://api.rawg.io/api/games?page=${page}&key=83b4eabf3167483aa7ee90180948e7a8`
  );
  const games: IGamesResponseObject = await response.json();
  console.log(games);

  return games.results;
};

export const searchGames = async (search: string): Promise<IGame[]> => {
  const response = await fetch(
    `https://api.rawg.io/api/games?&search=${search}&key=83b4eabf3167483aa7ee90180948e7a8`
  );
  const games: IGamesResponseObject = await response.json();
  console.log(games);

  return games.results;
};
