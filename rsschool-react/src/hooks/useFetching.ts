import { useCallback, useState } from 'react';

type useFetchingResult = [() => Promise<void>, boolean, string];

export const useFetching = (
  callback: () => Promise<void>
): useFetchingResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, [callback]);
  return [fetching, isLoading, error];
};
