import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../../constants';
import { IGame } from '../../types';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Game'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getGames: builder.query<
      IGame[],
      { currentPage: number; searchString: string; pageSize: number }
    >({
      query: (args) => {
        const { currentPage, searchString, pageSize } = args;
        return {
          url: `/games?page=${currentPage}&search=${searchString}&page_size=${pageSize}&key=${API_KEY}`,
          params: { currentPage, searchString, pageSize },
        };
      },
    }),
  }),
});

export const { useGetGamesQuery } = api;
