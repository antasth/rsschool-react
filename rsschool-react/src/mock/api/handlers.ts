import { http, HttpResponse } from 'msw';
import { API_URL } from '../../constants';
import { EmptyMockData, MockData } from './mockResponse';

export let isApiCall = false;
export const isApiCallClear = (): boolean => (isApiCall = false);

export const handlers = [
  http.get(`${API_URL}/games`, ({ request }) => {
    isApiCall = true;
    return new URL(request.url).searchParams.get('search') ===
      'noCardsPresentTest'
      ? HttpResponse.json(EmptyMockData, { status: 200 })
      : HttpResponse.json(MockData, { status: 200 });
  }),
  // http.get(`${API_URL}/games/:slug`, ({ params }) => {
  //   const { slug } = params;
  //   isApiCall = true;

  //   return HttpResponse.json(
  //     MockData.results.filter((game) => game.slug === slug),
  //     { status: 200 }
  //   );
  // }),
];
