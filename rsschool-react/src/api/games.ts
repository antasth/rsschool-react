import { IGame, IGamesResponseObject } from '../types/types';

// interface ResponseObject<T> {
//   count: number;
//   next: string;
//   previous: string;
//   results: T[];
// }

export const getGames = async (page: number): Promise<IGame[]> => {
  const response = await fetch(
    `https://api.rawg.io/api/games?page=${page}&key=83b4eabf3167483aa7ee90180948e7a8`
  );
  const games: IGamesResponseObject = await response.json();
  console.log(games);

  return games.results;
};
