export const getFromLocalStorage = (): string => {
  return localStorage.searchString ? JSON.parse(localStorage.searchString) : '';
};

export const saveToLocalStorage = (search: string): void => {
  localStorage.setItem('searchString', JSON.stringify(search.trim()));
};

export const getPagesArray = (
  currentPage: number,
  pagesCount: number
): number[] => {
  const from = currentPage > 2 ? currentPage - 2 : 1;
  let to = currentPage > 2 ? currentPage + 2 : 5;

  if (to >= pagesCount) {
    to = pagesCount;
  }
  return fillArray(from, to);
};

const fillArray = (from: number, to: number): number[] => {
  const res: number[] = [];
  for (let i = from; i <= to; i++) {
    res.push(i);
  }
  return res;
};
