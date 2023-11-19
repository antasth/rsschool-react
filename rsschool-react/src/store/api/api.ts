import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../../constants';
import {
  IGameDetails,
  IGamesResponseObject,
  IGetGamesQueryProps,
} from '../../types';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Game'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getGames: build.query<IGamesResponseObject, IGetGamesQueryProps>({
      query: ({ currentPage, searchString, pageSize }) => ({
        url: `/games?page=${currentPage}&search=${searchString}&page_size=${pageSize}&key=${API_KEY}`,
      }),
    }),
    getGameDetails: build.query<IGameDetails, { slug: string }>({
      query: ({ slug }) => ({
        url: `${slug}?key=${API_KEY}`,
      }),
    }),
  }),
});

export const { useGetGamesQuery, useGetGameDetailsQuery } = api;
