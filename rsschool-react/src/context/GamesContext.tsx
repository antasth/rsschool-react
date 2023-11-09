import { createContext, useState } from 'react';
import { IGame } from '../types';
import { getFromLocalStorage } from '../utils';

type GameContextProviderProps = {
  children: React.ReactNode;
};

type GamesContextProps = {
  searchString: string;
  gamesList: IGame[];
  setGamesList: React.Dispatch<React.SetStateAction<IGame[]>>;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
};
const GamesContext = createContext({} as GamesContextProps);

const GamesContextProvider = ({
  children,
}: GameContextProviderProps): React.ReactElement => {
  const [gamesList, setGamesList] = useState<IGame[]>([]);
  const [searchString, setSearchString] = useState(
    getFromLocalStorage('searchString')
  );

  const GamesContextValue = {
    setSearchString,
    searchString,
    gamesList,
    setGamesList,
  };

  return (
    <GamesContext.Provider value={GamesContextValue}>
      {children}
    </GamesContext.Provider>
  );
};

export { GamesContext, GamesContextProvider };
