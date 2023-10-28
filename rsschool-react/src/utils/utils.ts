export const getFromLocalStorage = (): string => {
  return localStorage.searchString ? JSON.parse(localStorage.searchString) : '';
};

export const saveToLocalStorage = (search: string): void => {
  localStorage.setItem('searchString', JSON.stringify(search.trim()));
};
