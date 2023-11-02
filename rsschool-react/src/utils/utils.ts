export const getFromLocalStorage = (): string => {
  return localStorage.searchString ? JSON.parse(localStorage.searchString) : '';
};

export const saveToLocalStorage = (search: string): void => {
  localStorage.setItem('searchString', JSON.stringify(search.trim()));
};

export const getPagesArray = (
  itemsCount: number,
  itemsOnPageLimit: number
): number[] => {
  return Array.from(
    { length: Math.ceil(itemsCount / itemsOnPageLimit) },
    (_, k) => k + 1
  );
};
