import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../../constants';
import { IGamesResponseObject } from '../../types';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Game'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getGames: builder.query<
      IGamesResponseObject,
      { currentPage: number; searchString: string; pageSize: number }
    >({
      query: ({ currentPage, searchString, pageSize }) => ({
        url: `/games?page=${currentPage}&search=${searchString}&page_size=${pageSize}&key=${API_KEY}`,
      }),
    }),
  }),
});

export const { useGetGamesQuery } = api;
