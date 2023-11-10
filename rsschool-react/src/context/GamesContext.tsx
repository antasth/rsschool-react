import { createContext, useMemo, useState } from 'react';
import { IGame } from '../types';
import { getFromLocalStorage } from '../utils';

type GameContextProviderProps = {
  children: React.ReactNode;
};

type GamesContextProps = {
  searchString: string;
  currentPage: number;
  gamesList: IGame[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setGamesList: React.Dispatch<React.SetStateAction<IGame[]>>;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
};
const GamesContext = createContext({} as GamesContextProps);

const GamesContextProvider = ({
  children,
}: GameContextProviderProps): React.ReactElement => {
  const [gamesList, setGamesList] = useState<IGame[]>([]);
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
    }),
    [
      setSearchString,
      searchString,
      gamesList,
      currentPage,
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
