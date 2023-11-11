import { createContext, useMemo, useState } from 'react';
import { DEFAULT_PAGE_SIZE } from '../constants';
import { IGame } from '../types';
import { getFromLocalStorage } from '../utils';

type GameContextProviderProps = {
  children: React.ReactNode;
  count?: number;
};

type GamesContextProps = {
  currentPage: number;
  gamesCount: number;
  pageSize: number;
  searchString: string;
  gamesList: IGame[];
  setGamesCount: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  setGamesList: React.Dispatch<React.SetStateAction<IGame[]>>;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
};
const GamesContext = createContext({} as GamesContextProps);

const GamesContextProvider = ({
  children,
  count = 0,
}: GameContextProviderProps): React.ReactElement => {
  const [gamesList, setGamesList] = useState<IGame[]>([]);
  const [gamesCount, setGamesCount] = useState(count);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [searchString, setSearchString] = useState(
    getFromLocalStorage('searchString')
  );

  const GamesContextValue = useMemo(
    () => ({
      searchString,
      gamesList,
      currentPage,
      gamesCount,
      pageSize,
      setGamesList,
      setCurrentPage,
      setSearchString,
      setGamesCount,
      setPageSize,
    }),
    [
      setSearchString,
      searchString,
      gamesList,
      pageSize,
      currentPage,
      gamesCount,
      setGamesCount,
      setGamesList,
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
