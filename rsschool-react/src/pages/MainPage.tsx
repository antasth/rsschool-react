import React, { useEffect, useState } from 'react';
import { getGames } from '../api/games';
import { GamesList } from '../components/GamesList/GamesList';
import { Header } from '../components/Header/Header';
import { Loader } from '../components/Loader/Loader';
import { IGame } from '../types/types';
import { getFromLocalStorage } from '../utils/utils';
import styles from './MainPage.module.css';

const MainPage = (): React.ReactElement => {
  const [gamesList, setGamesList] = useState<IGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getGamesList = async (searchString: string): Promise<void> => {
    setIsLoading(true);
    setGamesList(await getGames(searchString));
    setIsLoading(false);
  };

  const setError = (): void => setIsError(true);

  useEffect(() => {
    const searchRequest = getFromLocalStorage();
    getGamesList(searchRequest);
  }, []);

  useEffect(() => {
    if (isError) throw new Error('Error for test ErrorBoundary');
  }, [isError]);

  return (
    <>
      <Header searchGames={getGamesList} />
      <main className={styles.main}>
        <button className={styles.button} type="button" onClick={setError}>
          Throw Error
        </button>
        {isLoading ? <Loader /> : <GamesList gamesList={gamesList} />}
      </main>
    </>
  );
};

export { MainPage };
