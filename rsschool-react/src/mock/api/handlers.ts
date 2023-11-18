import { http, HttpResponse } from 'msw';
import { MockData } from './mockResponse';

export const handlers = [
  http.get(
    'https://api.rawg.io/api/games?page=1&search=&page_size=12&key=83b4eabf3167483aa7ee90180948e7a8',
    () => {
      return HttpResponse.json(MockData, { status: 200 });
    }
  ),
  http.get(
    'https://api.rawg.io/games/grand-theft-auto-v&key=83b4eabf3167483aa7ee90180948e7a8',
    () => {
      return HttpResponse.json(MockData.results[0], { status: 200 });
    }
  ),
];
