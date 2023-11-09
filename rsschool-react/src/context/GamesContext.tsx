import { createContext, useState } from 'react';
import { getFromLocalStorage } from '../utils';

type GameContextProviderProps = {
  children: React.ReactNode;
};

type GamesContextProps = {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
};
const GamesContext = createContext({} as GamesContextProps);

const GamesContextProvider = ({
  children,
}: GameContextProviderProps): React.ReactElement => {
  const [searchString, setSearchString] = useState(
    getFromLocalStorage('searchString')
  );

  const GamesContextValue = { setSearchString, searchString };

  return (
    <GamesContext.Provider value={GamesContextValue}>
      {children}
    </GamesContext.Provider>
  );
};

export { GamesContext, GamesContextProvider };
