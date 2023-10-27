export const getGames = async (page: number): Promise<void> => {
  const response = await fetch(
    `https://api.rawg.io/api/games?page=${page}&key=83b4eabf3167483aa7ee90180948e7a8`
  );
  const games = await response.json();
  return games;
};
