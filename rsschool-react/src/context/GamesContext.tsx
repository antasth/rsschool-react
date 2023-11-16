import { createContext, useMemo, useState } from 'react';
import { DEFAULT_PAGE_SIZE } from '../constants';

type GameContextProviderProps = {
  children: React.ReactNode;
  count?: number;
};

type GamesContextProps = {
  currentPage: number;
  gamesCount: number;
  pageSize: number;
  setGamesCount: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};
const GamesContext = createContext({} as GamesContextProps);

const GamesContextProvider = ({
  children,
  count = 0,
}: GameContextProviderProps): React.ReactElement => {
  const [gamesCount, setGamesCount] = useState(count);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const GamesContextValue = useMemo(
    () => ({
      currentPage,
      gamesCount,
      pageSize,
      setCurrentPage,
      setGamesCount,
      setPageSize,
    }),
    [
      pageSize,
      currentPage,
      gamesCount,
      setGamesCount,
      setCurrentPage,
      setPageSize,
    ]
  );

  return (
    <GamesContext.Provider value={GamesContextValue}>
      {children}
    </GamesContext.Provider>
  );
};

export { GamesContext, GamesContextProvider };
