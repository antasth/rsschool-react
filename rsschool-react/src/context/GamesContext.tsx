import { createContext, useMemo, useState } from 'react';
import { IGame } from '../types';
import { getFromLocalStorage } from '../utils';

type GameContextProviderProps = {
  children: React.ReactNode;
};

type GamesContextProps = {
  currentPage: number;
  gamesCount: number;
  searchString: string;
  gamesList: IGame[];
  setGamesCount: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setGamesList: React.Dispatch<React.SetStateAction<IGame[]>>;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
};
const GamesContext = createContext({} as GamesContextProps);

const GamesContextProvider = ({
  children,
}: GameContextProviderProps): React.ReactElement => {
  const [gamesList, setGamesList] = useState<IGame[]>([]);
  const [gamesCount, setGamesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchString, setSearchString] = useState(
    getFromLocalStorage('searchString')
  );

  const GamesContextValue = useMemo(
    () => ({
      setSearchString,
      searchString,
      gamesList,
      setGamesList,
      currentPage,
      setCurrentPage,
      gamesCount,
      setGamesCount,
    }),
    [
      setSearchString,
      searchString,
      gamesList,
      currentPage,
      gamesCount,
      setGamesCount,
      setGamesList,
      setCurrentPage,
    ]
  );

  return (
    <GamesContext.Provider value={GamesContextValue}>
      {children}
    </GamesContext.Provider>
  );
};

export { GamesContext, GamesContextProvider };
