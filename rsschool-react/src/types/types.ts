export interface IGamesResponseObject {
  count: number;
  description: string;
  filters: IFilter[];
  next: string | null;
  nofollow: boolean;
  nofollow_collections: [];
  noindex: boolean;
  previous: string | null;
  results: IGame[];
  seo_description: string;
  seo_h1: string;
  seo_keywords: string;
  seo_title: string;
}
interface IFilter {
  count: number;
  decade: number;
  filter: string;
  from: number;
  nofollow: boolean;
  to: number;
  years: IYear[];
}

interface IYear {
  count: number;
  nofollow: boolean;
  year: number;
}

export interface IGame {
  added: number;
  added_by_status: IStatus | null;
  background_image: string;
  dominant_color: string;
  esrb_rating: IRating;
  genres: IGenre[];
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: IPlatform[];
  playtime: number;
  rating: number;
  rating_top: number;
  ratings: IRating[];
  ratings_count: number;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  short_screenshots: IScreenShot[];
  slug: string;
  stores: IStore[];
  suggestions_count: number;
  tags: ITag[];
  tba: boolean;
  updated: string;
  user_game: string | null;
}

interface IStatus {
  beaten: number;
  dropped: number;
  owned: number;
  playing: number;
  toplay: number;
  yet: number;
}

interface IRating {
  id: number;
  name: string;
  slug: string;
}

interface IGenre {
  games_count: number;
  image_background: string;
  name: string;
  slug: string;
}

interface IPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface IRating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface IScreenShot {
  id: number;
  image: string;
}

interface IStore {
  id: number;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  };
}

interface ITag {
  id: number;
  games_count: number;
  name: string;
  slug: string;
  language: string;
  image_background: string;
}
