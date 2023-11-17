import { createContext, useMemo, useState } from 'react';

type GameContextProviderProps = {
  children: React.ReactNode;
  count?: number;
};

type GamesContextProps = {
  currentPage: number;
  gamesCount: number;
  setGamesCount: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
const GamesContext = createContext({} as GamesContextProps);

const GamesContextProvider = ({
  children,
  count = 0,
}: GameContextProviderProps): React.ReactElement => {
  const [gamesCount, setGamesCount] = useState(count);
  const [currentPage, setCurrentPage] = useState(1);

  const GamesContextValue = useMemo(
    () => ({
      currentPage,
      gamesCount,
      setCurrentPage,
      setGamesCount,
    }),
    [currentPage, gamesCount, setGamesCount, setCurrentPage]
  );

  return (
    <GamesContext.Provider value={GamesContextValue}>
      {children}
    </GamesContext.Provider>
  );
};

export { GamesContext, GamesContextProvider };
