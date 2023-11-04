import { IGameDetails, IGamesResponseObject } from '../types/types';

export const getGames = async (
  search: string,
  page: number,
  pageSize: number
): Promise<IGamesResponseObject> => {
  const response = await fetch(
    `https://api.rawg.io/api/games?page=${page}&search=${search}&page_size=${pageSize}&key=83b4eabf3167483aa7ee90180948e7a8`
  );
  const games: IGamesResponseObject = await response.json();
  console.log(games);

  return games;
};

export const getGameDetails = async (slug: string): Promise<IGameDetails> => {
  const response = await fetch(
    `https://api.rawg.io/api${slug}?key=83b4eabf3167483aa7ee90180948e7a8`
  );
  const gameDetails = await response.json();
  console.log(gameDetails);

  return gameDetails;
};
