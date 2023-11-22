import { IGamesResponseObject } from '../../types';
export const EmptyMockData: IGamesResponseObject = {
  count: 0,
  next: '',
  previous: null,
  results: [],
  seo_title: '',
  seo_description: '',
  seo_keywords: '',
  seo_h1: '',
  noindex: false,
  nofollow: false,
  description: '',
  filters: {
    years: [],
  },
  nofollow_collections: [''],
};
export const MockData: IGamesResponseObject = {
  count: 859299,
  next: 'https://api.rawg.io/api/games?key=83b4eabf3167483aa7ee90180948e7a8&page=2&page_size=12&search=',
  previous: null,
  results: [
    {
      id: 3498,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 3961,
          percent: 59.06,
        },
        {
          id: 4,
          title: 'recommended',
          count: 2197,
          percent: 32.76,
        },
        {
          id: 3,
          title: 'meh',
          count: 428,
          percent: 6.38,
        },
        {
          id: 1,
          title: 'skip',
          count: 121,
          percent: 1.8,
        },
      ],
      ratings_count: 6609,
      reviews_text_count: 57,
      added: 20209,
      added_by_status: {
        yet: 514,
        owned: 11596,
        beaten: 5717,
        toplay: 601,
        dropped: 1068,
        playing: 713,
      },
      metacritic: 92,
      playtime: 74,
      suggestions_count: 424,
      updated: '2023-11-18T08:36:44',
      user_game: null,
      reviews_count: 6707,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 964,
            image_background:
              'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 831,
            image_background:
              'https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: {
            minimum:
              'Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.',
            recommended:
              'Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6733,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3162,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2786,
            image_background:
              'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5560,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 176681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 136377,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
      ],
      stores: [
        {
          id: 290375,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7866,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
        },
        {
          id: 438095,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1291,
            image_background:
              'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
          },
        },
        {
          id: 290376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 290377,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1912,
            image_background:
              'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
          },
        },
        {
          id: 290378,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4780,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 34352,
          image_background:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 36538,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 16087,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 31261,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3377,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 19082,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 10722,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6882,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4536,
          image_background:
            'https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 29975,
          image_background:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 10427,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 23661,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 6395,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 11642,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 3150,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 853,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 2670,
          image_background:
            'https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg',
        },
        {
          id: 62349,
          name: 'vr mod',
          slug: 'vr-mod',
          language: 'eng',
          games_count: 17,
          image_background:
            'https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 1827221,
          image:
            'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
        },
        {
          id: 1827222,
          image:
            'https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg',
        },
        {
          id: 1827223,
          image:
            'https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg',
        },
        {
          id: 1827225,
          image:
            'https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg',
        },
        {
          id: 1827226,
          image:
            'https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg',
        },
        {
          id: 1827227,
          image:
            'https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg',
        },
      ],
    },
    {
      id: 3328,
      slug: 'the-witcher-3-wild-hunt',
      name: 'The Witcher 3: Wild Hunt',
      released: '2015-05-18',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
      rating: 4.66,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 4978,
          percent: 77.27,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1034,
          percent: 16.05,
        },
        {
          id: 3,
          title: 'meh',
          count: 269,
          percent: 4.18,
        },
        {
          id: 1,
          title: 'skip',
          count: 161,
          percent: 2.5,
        },
      ],
      ratings_count: 6340,
      reviews_text_count: 70,
      added: 19494,
      added_by_status: {
        yet: 1094,
        owned: 11219,
        beaten: 4662,
        toplay: 754,
        dropped: 903,
        playing: 862,
      },
      metacritic: 92,
      playtime: 46,
      suggestions_count: 672,
      updated: '2023-11-18T15:02:35',
      user_game: null,
      reviews_count: 6442,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 102892,
            image_background:
              'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6733,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5364,
            image_background:
              'https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5560,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 176681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 136377,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 54296,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
        },
      ],
      stores: [
        {
          id: 354780,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5614,
            image_background:
              'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
          },
        },
        {
          id: 3565,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7866,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
        },
        {
          id: 305376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 312313,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4780,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
        {
          id: 676022,
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
            domain: 'nintendo.com',
            games_count: 8925,
            image_background:
              'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 16087,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 31261,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3377,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 19082,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 19860,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6882,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 10427,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 26067,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 6395,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 6252,
          image_background:
            'https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14865,
          image_background:
            'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 5746,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 145,
          name: 'Choices Matter',
          slug: 'choices-matter',
          language: 'eng',
          games_count: 4420,
          image_background:
            'https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 2652,
          image_background:
            'https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 3669,
          image_background:
            'https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg',
        },
        {
          id: 66,
          name: 'Medieval',
          slug: 'medieval',
          language: 'eng',
          games_count: 5874,
          image_background:
            'https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg',
        },
        {
          id: 82,
          name: 'Magic',
          slug: 'magic',
          language: 'eng',
          games_count: 8727,
          image_background:
            'https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg',
        },
        {
          id: 218,
          name: 'Multiple Endings',
          slug: 'multiple-endings',
          language: 'eng',
          games_count: 7867,
          image_background:
            'https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 30336,
          image:
            'https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg',
        },
        {
          id: 30337,
          image:
            'https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg',
        },
        {
          id: 30338,
          image:
            'https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg',
        },
        {
          id: 30339,
          image:
            'https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg',
        },
        {
          id: 30340,
          image:
            'https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg',
        },
        {
          id: 30342,
          image:
            'https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg',
        },
      ],
    },
    {
      id: 4200,
      slug: 'portal-2',
      name: 'Portal 2',
      released: '2011-04-18',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
      rating: 4.61,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 3902,
          percent: 70.28,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1380,
          percent: 24.86,
        },
        {
          id: 3,
          title: 'meh',
          count: 150,
          percent: 2.7,
        },
        {
          id: 1,
          title: 'skip',
          count: 120,
          percent: 2.16,
        },
      ],
      ratings_count: 5500,
      reviews_text_count: 34,
      added: 18365,
      added_by_status: {
        yet: 605,
        owned: 11338,
        beaten: 5350,
        toplay: 359,
        dropped: 568,
        playing: 145,
      },
      metacritic: 95,
      playtime: 11,
      suggestions_count: 546,
      updated: '2023-11-18T08:36:42',
      user_game: null,
      reviews_count: 5552,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3162,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2011-04-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2011-04-18',
          requirements_en: null,
          requirements_ru: {
            minimum:
              'Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение',
            recommended:
              'Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2786,
            image_background:
              'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
          },
          released_at: '2011-04-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 76058,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2011-04-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 102892,
            image_background:
              'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
          },
          released_at: '2011-04-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5560,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
          released_at: '2011-04-18',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 59395,
          image_background:
            'https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg',
        },
        {
          id: 7,
          name: 'Puzzle',
          slug: 'puzzle',
          games_count: 97180,
          image_background:
            'https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg',
        },
      ],
      stores: [
        {
          id: 465889,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4779,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 13134,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 4526,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7865,
            image_background:
              'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
          },
        },
        {
          id: 33916,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1912,
            image_background:
              'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 34352,
          image_background:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 36538,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 16087,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 16068,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 31261,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7569,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 10722,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 19860,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4536,
          image_background:
            'https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 29975,
          image_background:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 18123,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12647,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4963,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 23661,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 11448,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 11642,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
          language: 'eng',
          games_count: 5207,
          image_background:
            'https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg',
        },
        {
          id: 11669,
          name: 'stats',
          slug: 'stats',
          language: 'eng',
          games_count: 4725,
          image_background:
            'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1409,
          image_background:
            'https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg',
        },
        {
          id: 25,
          name: 'Space',
          slug: 'space',
          language: 'eng',
          games_count: 42314,
          image_background:
            'https://media.rawg.io/media/screenshots/bf7/bf71c819eace914e6c42ae3ecb667308.jpg',
        },
        {
          id: 40838,
          name: 'Includes level editor',
          slug: 'includes-level-editor',
          language: 'eng',
          games_count: 1770,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1295,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
          language: 'eng',
          games_count: 265,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 87,
          name: 'Science',
          slug: 'science',
          language: 'eng',
          games_count: 1622,
          image_background:
            'https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg',
        },
      ],
      esrb_rating: {
        id: 2,
        name: 'Everyone 10+',
        slug: 'everyone-10-plus',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          id: 99018,
          image:
            'https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg',
        },
        {
          id: 99019,
          image:
            'https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg',
        },
        {
          id: 99020,
          image:
            'https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg',
        },
        {
          id: 99021,
          image:
            'https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg',
        },
        {
          id: 99022,
          image:
            'https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg',
        },
        {
          id: 99023,
          image:
            'https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg',
        },
      ],
    },
    {
      id: 4291,
      slug: 'counter-strike-global-offensive',
      name: 'Counter-Strike: Global Offensive',
      released: '2012-08-21',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
      rating: 3.56,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1594,
          percent: 46.66,
        },
        {
          id: 3,
          title: 'meh',
          count: 890,
          percent: 26.05,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 549,
          percent: 16.07,
        },
        {
          id: 1,
          title: 'skip',
          count: 383,
          percent: 11.21,
        },
      ],
      ratings_count: 3381,
      reviews_text_count: 26,
      added: 15985,
      added_by_status: {
        yet: 256,
        owned: 12091,
        beaten: 985,
        toplay: 76,
        dropped: 1946,
        playing: 631,
      },
      metacritic: 81,
      playtime: 65,
      suggestions_count: 583,
      updated: '2023-11-17T19:19:52',
      user_game: null,
      reviews_count: 3416,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2012-08-21',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение',
            recommended:
              'Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2786,
            image_background:
              'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
          },
          released_at: '2012-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3162,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2012-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 176681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 59395,
          image_background:
            'https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg',
        },
      ],
      stores: [
        {
          id: 4619,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7865,
            image_background:
              'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
          },
        },
        {
          id: 11489,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 49169,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1912,
            image_background:
              'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 34352,
          image_background:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 36538,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 16087,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7569,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 10722,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4536,
          image_background:
            'https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 29975,
          image_background:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12647,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4963,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 80,
          name: 'Tactical',
          slug: 'tactical',
          language: 'eng',
          games_count: 4583,
          image_background:
            'https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg',
        },
        {
          id: 11669,
          name: 'stats',
          slug: 'stats',
          language: 'eng',
          games_count: 4725,
          image_background:
            'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1409,
          image_background:
            'https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg',
        },
        {
          id: 157,
          name: 'PvP',
          slug: 'pvp',
          language: 'eng',
          games_count: 8289,
          image_background:
            'https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 853,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
        {
          id: 70,
          name: 'War',
          slug: 'war',
          language: 'eng',
          games_count: 8957,
          image_background:
            'https://media.rawg.io/media/games/c81/c812e158129e00c9b0f096ae8a0bb7d6.jpg',
        },
        {
          id: 40837,
          name: 'In-App Purchases',
          slug: 'in-app-purchases',
          language: 'eng',
          games_count: 2331,
          image_background:
            'https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg',
        },
        {
          id: 11,
          name: 'Team-Based',
          slug: 'team-based',
          language: 'eng',
          games_count: 1437,
          image_background:
            'https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg',
        },
        {
          id: 77,
          name: 'Realistic',
          slug: 'realistic',
          language: 'eng',
          games_count: 4730,
          image_background:
            'https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg',
        },
        {
          id: 131,
          name: 'Fast-Paced',
          slug: 'fast-paced',
          language: 'eng',
          games_count: 10428,
          image_background:
            'https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg',
        },
        {
          id: 40856,
          name: 'Valve Anti-Cheat enabled',
          slug: 'valve-anti-cheat-enabled',
          language: 'eng',
          games_count: 105,
          image_background:
            'https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg',
        },
        {
          id: 81,
          name: 'Military',
          slug: 'military',
          language: 'eng',
          games_count: 1623,
          image_background:
            'https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg',
        },
        {
          id: 170,
          name: 'Competitive',
          slug: 'competitive',
          language: 'eng',
          games_count: 1092,
          image_background:
            'https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg',
        },
        {
          id: 73,
          name: 'e-sports',
          slug: 'e-sports',
          language: 'eng',
          games_count: 80,
          image_background:
            'https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg',
        },
        {
          id: 245,
          name: 'Trading',
          slug: 'trading',
          language: 'eng',
          games_count: 1046,
          image_background:
            'https://media.rawg.io/media/screenshots/02b/02b2367620982ae26d04ed51d5c35505_apw2ZVh.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
        },
        {
          id: 81644,
          image:
            'https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg',
        },
        {
          id: 81645,
          image:
            'https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg',
        },
        {
          id: 81646,
          image:
            'https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg',
        },
        {
          id: 81647,
          image:
            'https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg',
        },
        {
          id: 81648,
          image:
            'https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg',
        },
        {
          id: 81649,
          image:
            'https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg',
        },
      ],
    },
    {
      id: 5286,
      slug: 'tomb-raider',
      name: 'Tomb Raider (2013)',
      released: '2013-03-05',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
      rating: 4.05,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 2314,
          percent: 60.47,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 975,
          percent: 25.48,
        },
        {
          id: 3,
          title: 'meh',
          count: 420,
          percent: 10.97,
        },
        {
          id: 1,
          title: 'skip',
          count: 118,
          percent: 3.08,
        },
      ],
      ratings_count: 3799,
      reviews_text_count: 13,
      added: 15964,
      added_by_status: {
        yet: 665,
        owned: 10315,
        beaten: 4103,
        toplay: 253,
        dropped: 524,
        playing: 104,
      },
      metacritic: 86,
      playtime: 10,
      suggestions_count: 642,
      updated: '2023-11-18T15:06:33',
      user_game: null,
      reviews_count: 3827,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6733,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 102892,
            image_background:
              'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: {
            minimum:
              'Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>',
          },
          requirements_ru: {
            minimum: 'i486-100, 8 Мб',
            recommended: 'Pentium 166, 16 Мб',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5560,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2786,
            image_background:
              'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3162,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 176681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 136377,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
      ],
      stores: [
        {
          id: 33824,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1912,
            image_background:
              'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
          },
        },
        {
          id: 13151,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 5640,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7865,
            image_background:
              'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
          },
        },
        {
          id: 218233,
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
            domain: 'play.google.com',
            games_count: 17067,
            image_background:
              'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
          },
        },
        {
          id: 79036,
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
            domain: 'apps.apple.com',
            games_count: 75353,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
        },
        {
          id: 713685,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1291,
            image_background:
              'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 36538,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 16087,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 31261,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 19082,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 10427,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1778,
          image_background:
            'https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 21087,
          image_background:
            'https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 11448,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 15,
          name: 'Stealth',
          slug: 'stealth',
          language: 'eng',
          games_count: 5987,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 14857,
          image_background:
            'https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 3150,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 74,
          name: 'Retro',
          slug: 'retro',
          language: 'eng',
          games_count: 40619,
          image_background:
            'https://media.rawg.io/media/screenshots/2fc/2fc6994425146f9dba3133400b414e29.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 1721,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 269,
          name: 'Quick-Time Events',
          slug: 'quick-time-events',
          language: 'eng',
          games_count: 504,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 126,
          name: 'Dinosaurs',
          slug: 'dinosaurs',
          language: 'eng',
          games_count: 1665,
          image_background:
            'https://media.rawg.io/media/screenshots/428/4286a224467623d23706dacb569a2ea1.jpg',
        },
        {
          id: 306,
          name: 'Lara Croft',
          slug: 'lara-croft',
          language: 'eng',
          games_count: 14,
          image_background:
            'https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 99160,
          image:
            'https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg',
        },
        {
          id: 99161,
          image:
            'https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg',
        },
        {
          id: 99162,
          image:
            'https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg',
        },
        {
          id: 99163,
          image:
            'https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg',
        },
        {
          id: 99164,
          image:
            'https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg',
        },
        {
          id: 99165,
          image:
            'https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg',
        },
      ],
    },
    {
      id: 13536,
      slug: 'portal',
      name: 'Portal',
      released: '2007-10-09',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
      rating: 4.51,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2817,
          percent: 60.93,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1539,
          percent: 33.29,
        },
        {
          id: 3,
          title: 'meh',
          count: 174,
          percent: 3.76,
        },
        {
          id: 1,
          title: 'skip',
          count: 93,
          percent: 2.01,
        },
      ],
      ratings_count: 4584,
      reviews_text_count: 26,
      added: 15619,
      added_by_status: {
        yet: 425,
        owned: 9645,
        beaten: 4854,
        toplay: 252,
        dropped: 368,
        playing: 75,
      },
      metacritic: 90,
      playtime: 4,
      suggestions_count: 286,
      updated: '2023-11-18T13:41:11',
      user_game: null,
      reviews_count: 4623,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 52299,
            image_background:
              'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: {
            minimum: '4.4 and up',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3162,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2786,
            image_background:
              'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 76058,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 102892,
            image_background:
              'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: {
            minimum:
              '<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: {
            minimum:
              '<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>',
          },
          requirements_ru: {
            minimum:
              'Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c',
            recommended:
              'Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5364,
            image_background:
              'https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 136377,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 7,
          name: 'Puzzle',
          slug: 'puzzle',
          games_count: 97180,
          image_background:
            'https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg',
        },
      ],
      stores: [
        {
          id: 14890,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 40973,
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
            domain: 'play.google.com',
            games_count: 17067,
            image_background:
              'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 34352,
          image_background:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 31261,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3377,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 19860,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 29975,
          image_background:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 18123,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 10892,
          image_background:
            'https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12647,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 23661,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1778,
          image_background:
            'https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 11448,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 11642,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 40838,
          name: 'Includes level editor',
          slug: 'includes-level-editor',
          language: 'eng',
          games_count: 1770,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1295,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 57629,
          image_background:
            'https://media.rawg.io/media/games/34e/34e100b1f648de99f32d477065f04653.jpg',
        },
        {
          id: 114,
          name: 'Physics',
          slug: 'physics',
          language: 'eng',
          games_count: 18464,
          image_background:
            'https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg',
        },
        {
          id: 148,
          name: 'Dark Humor',
          slug: 'dark-humor',
          language: 'eng',
          games_count: 2690,
          image_background:
            'https://media.rawg.io/media/games/d1c/d1cd8a226cb224357c1f59605577cbf2.jpg',
        },
        {
          id: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
          language: 'eng',
          games_count: 265,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 40839,
          name: 'Includes Source SDK',
          slug: 'includes-source-sdk',
          language: 'eng',
          games_count: 62,
          image_background:
            'https://media.rawg.io/media/screenshots/ae8/ae873e0da5973a9896bdf5ebce1e9bf4.jpg',
        },
        {
          id: 87,
          name: 'Science',
          slug: 'science',
          language: 'eng',
          games_count: 1622,
          image_background:
            'https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 115793,
          image:
            'https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg',
        },
        {
          id: 115794,
          image:
            'https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg',
        },
        {
          id: 115795,
          image:
            'https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg',
        },
        {
          id: 115796,
          image:
            'https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg',
        },
        {
          id: 115797,
          image:
            'https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg',
        },
        {
          id: 115798,
          image:
            'https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg',
        },
      ],
    },
    {
      id: 12020,
      slug: 'left-4-dead-2',
      name: 'Left 4 Dead 2',
      released: '2009-11-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
      rating: 4.09,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1705,
          percent: 53.36,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 1009,
          percent: 31.58,
        },
        {
          id: 3,
          title: 'meh',
          count: 362,
          percent: 11.33,
        },
        {
          id: 1,
          title: 'skip',
          count: 119,
          percent: 3.72,
        },
      ],
      ratings_count: 3176,
      reviews_text_count: 10,
      added: 15522,
      added_by_status: {
        yet: 369,
        owned: 11334,
        beaten: 2417,
        toplay: 112,
        dropped: 1144,
        playing: 146,
      },
      metacritic: 89,
      playtime: 9,
      suggestions_count: 587,
      updated: '2023-11-18T08:36:34',
      user_game: null,
      reviews_count: 3195,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 102892,
            image_background:
              'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
          },
          released_at: '2009-11-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 76058,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2009-11-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2009-11-17',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере',
            recommended:
              'Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2786,
            image_background:
              'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
          },
          released_at: '2009-11-17',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 176681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 59395,
          image_background:
            'https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg',
        },
      ],
      stores: [
        {
          id: 13208,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 34000,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1912,
            image_background:
              'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 34352,
          image_background:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 36538,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 16087,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 16068,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7569,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 10722,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4536,
          image_background:
            'https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 29975,
          image_background:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 43027,
          image_background:
            'https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12647,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4963,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5412,
          image_background:
            'https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7911,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
          language: 'eng',
          games_count: 5207,
          image_background:
            'https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg',
        },
        {
          id: 80,
          name: 'Tactical',
          slug: 'tactical',
          language: 'eng',
          games_count: 4583,
          image_background:
            'https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg',
        },
        {
          id: 11669,
          name: 'stats',
          slug: 'stats',
          language: 'eng',
          games_count: 4725,
          image_background:
            'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1409,
          image_background:
            'https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg',
        },
        {
          id: 63,
          name: 'Zombies',
          slug: 'zombies',
          language: 'eng',
          games_count: 9971,
          image_background:
            'https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 853,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
        {
          id: 43,
          name: 'Post-apocalyptic',
          slug: 'post-apocalyptic',
          language: 'eng',
          games_count: 3659,
          image_background:
            'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 7999,
          image_background:
            'https://media.rawg.io/media/games/0b3/0b34647c42271600399b93d19b10f1aa.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1295,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 5,
          name: 'Replay Value',
          slug: 'replay-value',
          language: 'eng',
          games_count: 1472,
          image_background:
            'https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg',
        },
        {
          id: 11,
          name: 'Team-Based',
          slug: 'team-based',
          language: 'eng',
          games_count: 1437,
          image_background:
            'https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg',
        },
        {
          id: 40856,
          name: 'Valve Anti-Cheat enabled',
          slug: 'valve-anti-cheat-enabled',
          language: 'eng',
          games_count: 105,
          image_background:
            'https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg',
        },
        {
          id: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
          language: 'eng',
          games_count: 265,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 40839,
          name: 'Includes Source SDK',
          slug: 'includes-source-sdk',
          language: 'eng',
          games_count: 62,
          image_background:
            'https://media.rawg.io/media/screenshots/ae8/ae873e0da5973a9896bdf5ebce1e9bf4.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
        },
        {
          id: 99748,
          image:
            'https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg',
        },
        {
          id: 99749,
          image:
            'https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg',
        },
        {
          id: 99750,
          image:
            'https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg',
        },
        {
          id: 99751,
          image:
            'https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg',
        },
        {
          id: 99752,
          image:
            'https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg',
        },
        {
          id: 99753,
          image:
            'https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg',
        },
      ],
    },
    {
      id: 5679,
      slug: 'the-elder-scrolls-v-skyrim',
      name: 'The Elder Scrolls V: Skyrim',
      released: '2011-11-11',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
      rating: 4.42,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2613,
          percent: 57.45,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1437,
          percent: 31.6,
        },
        {
          id: 3,
          title: 'meh',
          count: 401,
          percent: 8.82,
        },
        {
          id: 1,
          title: 'skip',
          count: 97,
          percent: 2.13,
        },
      ],
      ratings_count: 4501,
      reviews_text_count: 32,
      added: 15257,
      added_by_status: {
        yet: 493,
        owned: 9083,
        beaten: 3638,
        toplay: 398,
        dropped: 1270,
        playing: 375,
      },
      metacritic: 94,
      playtime: 46,
      suggestions_count: 597,
      updated: '2023-11-18T11:19:35',
      user_game: null,
      reviews_count: 4548,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2011-11-11',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере',
            recommended:
              'Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5364,
            image_background:
              'https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg',
          },
          released_at: '2011-11-11',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2786,
            image_background:
              'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
          },
          released_at: '2011-11-11',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3162,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2011-11-11',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 176681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 54296,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
        },
      ],
      stores: [
        {
          id: 6037,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7865,
            image_background:
              'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
          },
        },
        {
          id: 15144,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 32919,
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
            domain: 'nintendo.com',
            games_count: 8923,
            image_background:
              'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
          },
        },
        {
          id: 49792,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1912,
            image_background:
              'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 34352,
          image_background:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 16068,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 31261,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7569,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3377,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 19082,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 19860,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6882,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 29975,
          image_background:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 10427,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 10892,
          image_background:
            'https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 26067,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 6395,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 6252,
          image_background:
            'https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1409,
          image_background:
            'https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg',
        },
        {
          id: 468,
          name: 'role-playing',
          slug: 'role-playing',
          language: 'eng',
          games_count: 1532,
          image_background:
            'https://media.rawg.io/media/games/598/59851e152a6898c8bf79069b5bf2f4db.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 853,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
        {
          id: 121,
          name: 'Character Customization',
          slug: 'character-customization',
          language: 'eng',
          games_count: 4056,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 3669,
          image_background:
            'https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg',
        },
        {
          id: 66,
          name: 'Medieval',
          slug: 'medieval',
          language: 'eng',
          games_count: 5874,
          image_background:
            'https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg',
        },
        {
          id: 82,
          name: 'Magic',
          slug: 'magic',
          language: 'eng',
          games_count: 8727,
          image_background:
            'https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg',
        },
        {
          id: 205,
          name: 'Lore-Rich',
          slug: 'lore-rich',
          language: 'eng',
          games_count: 1045,
          image_background:
            'https://media.rawg.io/media/screenshots/997/99739f37c098a1dee511d2501e41204e.jpg',
        },
        {
          id: 215,
          name: 'Dragons',
          slug: 'dragons',
          language: 'eng',
          games_count: 2506,
          image_background:
            'https://media.rawg.io/media/screenshots/0bb/0bbb4b354fa779acc1f08ad1cf693956.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 118307,
          image:
            'https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg',
        },
        {
          id: 118308,
          image:
            'https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg',
        },
        {
          id: 118309,
          image:
            'https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg',
        },
        {
          id: 118310,
          image:
            'https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg',
        },
        {
          id: 118311,
          image:
            'https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg',
        },
        {
          id: 118312,
          image:
            'https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg',
        },
      ],
    },
    {
      id: 28,
      slug: 'red-dead-redemption-2',
      name: 'Red Dead Redemption 2',
      released: '2018-10-26',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
      rating: 4.59,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 3575,
          percent: 73.35,
        },
        {
          id: 4,
          title: 'recommended',
          count: 895,
          percent: 18.36,
        },
        {
          id: 3,
          title: 'meh',
          count: 265,
          percent: 5.44,
        },
        {
          id: 1,
          title: 'skip',
          count: 139,
          percent: 2.85,
        },
      ],
      ratings_count: 4773,
      reviews_text_count: 73,
      added: 14746,
      added_by_status: {
        yet: 898,
        owned: 7696,
        beaten: 3026,
        toplay: 1589,
        dropped: 645,
        playing: 892,
      },
      metacritic: 96,
      playtime: 20,
      suggestions_count: 604,
      updated: '2023-11-18T08:28:34',
      user_game: null,
      reviews_count: 4874,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2018-10-26',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7 - Service Pack 1 (6.1.7601)<br></li><li><strong>Processor:</strong> Intel® Core™ i5-2500K / AMD FX-6300<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 - April 2018 Update (v1803)<br></li><li><strong>Processor:</strong> Intel® Core™ i7-4770K / AMD Ryzen 5 1500X<br></li><li><strong>Memory:</strong> 12 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6733,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2018-10-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5560,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
          released_at: '2018-10-26',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 176681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 136377,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
      ],
      stores: [
        {
          id: 257732,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7866,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
        },
        {
          id: 374316,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1291,
            image_background:
              'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
          },
        },
        {
          id: 384218,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 48782,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4780,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 36538,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 31261,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3377,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 10722,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 19860,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6882,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 29975,
          image_background:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 10427,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 10892,
          image_background:
            'https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12647,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4963,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5412,
          image_background:
            'https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 21087,
          image_background:
            'https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 6395,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 6334,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 3150,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 157,
          name: 'PvP',
          slug: 'pvp',
          language: 'eng',
          games_count: 8289,
          image_background:
            'https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg',
        },
        {
          id: 40837,
          name: 'In-App Purchases',
          slug: 'in-app-purchases',
          language: 'eng',
          games_count: 2331,
          image_background:
            'https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 2652,
          image_background:
            'https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg',
        },
        {
          id: 89,
          name: 'Historical',
          slug: 'historical',
          language: 'eng',
          games_count: 2869,
          image_background:
            'https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 1721,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 77,
          name: 'Realistic',
          slug: 'realistic',
          language: 'eng',
          games_count: 4730,
          image_background:
            'https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 2670,
          image_background:
            'https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg',
        },
        {
          id: 45878,
          name: 'Online PvP',
          slug: 'online-pvp',
          language: 'eng',
          games_count: 3855,
          image_background:
            'https://media.rawg.io/media/games/d2e/d2ee15fda80056efef174da4ca5ae54f.jpg',
        },
        {
          id: 478,
          name: '3rd-Person Perspective',
          slug: '3rd-person-perspective',
          language: 'eng',
          games_count: 85,
          image_background:
            'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg',
        },
        {
          id: 270,
          name: 'Blood',
          slug: 'blood',
          language: 'eng',
          games_count: 2001,
          image_background:
            'https://media.rawg.io/media/screenshots/6f3/6f3855fc42784a7da7bdc4cf325b0d30.jpg',
        },
        {
          id: 78,
          name: 'America',
          slug: 'america',
          language: 'eng',
          games_count: 554,
          image_background:
            'https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg',
        },
        {
          id: 578,
          name: 'Masterpiece',
          slug: 'masterpiece',
          language: 'eng',
          games_count: 287,
          image_background:
            'https://media.rawg.io/media/screenshots/d3c/d3c1a4036f6d1dc8e5208fb046a9ac5a.jpg',
        },
        {
          id: 577,
          name: 'Beautiful',
          slug: 'beautiful',
          language: 'eng',
          games_count: 1856,
          image_background:
            'https://media.rawg.io/media/games/5f1/5f1399f755ed3a40b04a9195f4c06be5.jpg',
        },
        {
          id: 181,
          name: 'Hunting',
          slug: 'hunting',
          language: 'eng',
          games_count: 882,
          image_background:
            'https://media.rawg.io/media/screenshots/84f/84fe73fa5ab5b72a066d9e0d5530c3a5.jpg',
        },
        {
          id: 152,
          name: 'Western',
          slug: 'western',
          language: 'eng',
          games_count: 1241,
          image_background:
            'https://media.rawg.io/media/games/a86/a86ce0afaf2d5ec2b0f048989f01795e.jpg',
        },
        {
          id: 5452,
          name: '3rd-person',
          slug: '3rd-person',
          language: 'eng',
          games_count: 97,
          image_background:
            'https://media.rawg.io/media/screenshots/e30/e30b6a334c20ae534c15d3f0d71cad36.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 778173,
          image:
            'https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg',
        },
        {
          id: 778174,
          image:
            'https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg',
        },
        {
          id: 778175,
          image:
            'https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg',
        },
        {
          id: 778176,
          image:
            'https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg',
        },
        {
          id: 778177,
          image:
            'https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg',
        },
        {
          id: 778178,
          image:
            'https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg',
        },
      ],
    },
    {
      id: 4062,
      slug: 'bioshock-infinite',
      name: 'BioShock Infinite',
      released: '2013-03-26',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
      rating: 4.38,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2189,
          percent: 55.18,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1321,
          percent: 33.3,
        },
        {
          id: 3,
          title: 'meh',
          count: 348,
          percent: 8.77,
        },
        {
          id: 1,
          title: 'skip',
          count: 109,
          percent: 2.75,
        },
      ],
      ratings_count: 3929,
      reviews_text_count: 22,
      added: 14726,
      added_by_status: {
        yet: 810,
        owned: 8729,
        beaten: 4215,
        toplay: 387,
        dropped: 488,
        playing: 97,
      },
      metacritic: 94,
      playtime: 12,
      suggestions_count: 595,
      updated: '2023-11-18T08:36:43',
      user_game: null,
      reviews_count: 3967,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6733,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2786,
            image_background:
              'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5364,
            image_background:
              'https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 76058,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows Vista Service Pack 2 32-bit<br>\t</li><li><strong>Processor:</strong> Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz<br>\t</li><li><strong>Memory:</strong> 2GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics<br>\t</li><li><strong>Video Card Memory:</strong> 512 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 Service Pack 1 64-bit<br>\t</li><li><strong>Processor:</strong> Quad Core Processor<br>\t</li><li><strong>Memory:</strong> 4GB<br>\t</li><li><strong>Hard Disk Space:</strong> 30 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560<br>\t</li><li><strong>Video Card Memory:</strong> 1024 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD',
            recommended:
              'Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3162,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5560,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 176681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 59395,
          image_background:
            'https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg',
        },
      ],
      stores: [
        {
          id: 828870,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1291,
            image_background:
              'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
          },
        },
        {
          id: 71727,
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
            domain: 'apps.apple.com',
            games_count: 75353,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
        },
        {
          id: 440409,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4779,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 461035,
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
            domain: 'nintendo.com',
            games_count: 8923,
            image_background:
              'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
          },
        },
        {
          id: 4382,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7865,
            image_background:
              'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
          },
        },
        {
          id: 13084,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 33810,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1912,
            image_background:
              'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 34352,
          image_background:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 16087,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 16068,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 31261,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7569,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3377,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 19082,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 19860,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 29975,
          image_background:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 18123,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12647,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 26067,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5412,
          image_background:
            'https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg',
        },
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 10404,
          image_background:
            'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
        },
        {
          id: 119,
          name: 'Dystopian',
          slug: 'dystopian',
          language: 'eng',
          games_count: 1940,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 154,
          name: 'Steampunk',
          slug: 'steampunk',
          language: 'eng',
          games_count: 1153,
          image_background:
            'https://media.rawg.io/media/games/99d/99d7fadd2342f575d238a4e1f5c542b6.jpg',
        },
        {
          id: 305,
          name: 'Linear',
          slug: 'linear',
          language: 'eng',
          games_count: 4964,
          image_background:
            'https://media.rawg.io/media/games/fae/faebf3c8cbf30db3f46bfbecf6ada3d6.jpg',
        },
        {
          id: 208,
          name: 'Alternate History',
          slug: 'alternate-history',
          language: 'eng',
          games_count: 1605,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 317,
          name: 'Time Travel',
          slug: 'time-travel',
          language: 'eng',
          games_count: 1735,
          image_background:
            'https://media.rawg.io/media/screenshots/120/120530499012ea0149cfe358330b10c9.jpg',
        },
        {
          id: 287,
          name: 'Political',
          slug: 'political',
          language: 'eng',
          games_count: 555,
          image_background:
            'https://media.rawg.io/media/screenshots/f9f/f9fd255f048e899da8486ee9bb846978.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 98549,
          image:
            'https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg',
        },
        {
          id: 98550,
          image:
            'https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg',
        },
        {
          id: 98551,
          image:
            'https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg',
        },
        {
          id: 98552,
          image:
            'https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg',
        },
        {
          id: 98553,
          image:
            'https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg',
        },
        {
          id: 98554,
          image:
            'https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg',
        },
      ],
    },
    {
      id: 802,
      slug: 'borderlands-2',
      name: 'Borderlands 2',
      released: '2012-09-18',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
      rating: 4.02,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1500,
          percent: 47.83,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 973,
          percent: 31.03,
        },
        {
          id: 3,
          title: 'meh',
          count: 532,
          percent: 16.96,
        },
        {
          id: 1,
          title: 'skip',
          count: 131,
          percent: 4.18,
        },
      ],
      ratings_count: 3116,
      reviews_text_count: 12,
      added: 14520,
      added_by_status: {
        yet: 598,
        owned: 10016,
        beaten: 2230,
        toplay: 222,
        dropped: 1240,
        playing: 214,
      },
      metacritic: 89,
      playtime: 10,
      suggestions_count: 678,
      updated: '2023-11-18T08:35:55',
      user_game: null,
      reviews_count: 3136,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3162,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 102892,
            image_background:
              'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP3<br>\t</li><li><strong>Processor:</strong> 2.4 GHz Dual Core Processor<br>\t</li><li><strong>Memory:</strong> 2 GB(XP)/ 2 GB(Vista)<br>\t</li><li><strong>Hard Disk Space:</strong> 13 GB free<br>\t</li><li><strong>Video Memory:</strong> 256 MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce 8500 /ATI Radeon HD 2600<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP3/Vista/Win 7<br>\t</li><li><strong>Processor:</strong> 2.3 GHz Quad Core processor<br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Memory:</strong> 512MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce GTX 560 / ATI Radeon HD 5850<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 8500/Radeon HD 2600,13 Гб на винчестере,интернет-соединение',
            recommended:
              'Core i5/Phenom X4 2.3 ГГц,2 Гб памяти,GeForce GTX 560/Radeon HD 5850,20 Гб на винчестере,интернет-соединение',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 52299,
            image_background:
              'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 76058,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 1445,
            image_background:
              'https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2786,
            image_background:
              'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 176681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 59395,
          image_background:
            'https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 54296,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
        },
      ],
      stores: [
        {
          id: 4000,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7866,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
        },
        {
          id: 213037,
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
            domain: 'play.google.com',
            games_count: 17067,
            image_background:
              'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
          },
        },
        {
          id: 11088,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 34042,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1912,
            image_background:
              'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
          },
        },
        {
          id: 71617,
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
            domain: 'apps.apple.com',
            games_count: 75353,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
        },
        {
          id: 817,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4780,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 34352,
          image_background:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 36538,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 16087,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 16068,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 31261,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7569,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 19082,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 10722,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6882,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4536,
          image_background:
            'https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 18123,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12647,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4963,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 23661,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 11642,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 6252,
          image_background:
            'https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg',
        },
        {
          id: 167,
          name: 'Futuristic',
          slug: 'futuristic',
          language: 'eng',
          games_count: 4853,
          image_background:
            'https://media.rawg.io/media/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg',
        },
        {
          id: 120,
          name: 'Memes',
          slug: 'memes',
          language: 'eng',
          games_count: 1693,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 148,
          name: 'Dark Humor',
          slug: 'dark-humor',
          language: 'eng',
          games_count: 2690,
          image_background:
            'https://media.rawg.io/media/games/d1c/d1cd8a226cb224357c1f59605577cbf2.jpg',
        },
        {
          id: 166,
          name: 'Stylized',
          slug: 'stylized',
          language: 'eng',
          games_count: 5290,
          image_background:
            'https://media.rawg.io/media/screenshots/e49/e497cca0e21625b8e36614399f0b970e.jpg',
        },
        {
          id: 98,
          name: 'Loot',
          slug: 'loot',
          language: 'eng',
          games_count: 2090,
          image_background:
            'https://media.rawg.io/media/screenshots/37f/37f6c595ddfc5050a02f0f95d8805d77.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 7041,
          image:
            'https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg',
        },
        {
          id: 7062,
          image:
            'https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg',
        },
        {
          id: 7070,
          image:
            'https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg',
        },
        {
          id: 7072,
          image:
            'https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg',
        },
        {
          id: 7081,
          image:
            'https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg',
        },
        {
          id: 7088,
          image:
            'https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg',
        },
      ],
    },
    {
      id: 3439,
      slug: 'life-is-strange-episode-1-2',
      name: 'Life is Strange',
      released: '2015-01-29',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
      rating: 4.11,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1570,
          percent: 43.85,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1302,
          percent: 36.37,
        },
        {
          id: 3,
          title: 'meh',
          count: 478,
          percent: 13.35,
        },
        {
          id: 1,
          title: 'skip',
          count: 230,
          percent: 6.42,
        },
      ],
      ratings_count: 3536,
      reviews_text_count: 28,
      added: 14518,
      added_by_status: {
        yet: 764,
        owned: 9338,
        beaten: 3306,
        toplay: 343,
        dropped: 623,
        playing: 144,
      },
      metacritic: 83,
      playtime: 6,
      suggestions_count: 532,
      updated: '2023-11-14T16:28:19',
      user_game: null,
      reviews_count: 3580,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 521919,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 76058,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3162,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 102892,
            image_background:
              'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 77134,
            image_background:
              'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: {
            minimum:
              'iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2786,
            image_background:
              'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 52299,
            image_background:
              'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: {
            minimum: '6.0 and up',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6733,
            image_background:
              'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5560,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 136377,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
      ],
      stores: [
        {
          id: 451321,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5614,
            image_background:
              'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
          },
        },
        {
          id: 3702,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7866,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
        },
        {
          id: 35603,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 85269,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
        },
        {
          id: 35602,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4780,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
        {
          id: 217695,
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
            domain: 'play.google.com',
            games_count: 17067,
            image_background:
              'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
          },
        },
        {
          id: 245823,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1912,
            image_background:
              'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
          },
        },
        {
          id: 44714,
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
            domain: 'apps.apple.com',
            games_count: 75353,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 214645,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 16087,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 31261,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7569,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3377,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 19860,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 10427,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 11448,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14865,
          image_background:
            'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
        },
        {
          id: 141,
          name: 'Point & Click',
          slug: 'point-click',
          language: 'eng',
          games_count: 12318,
          image_background:
            'https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 57629,
          image_background:
            'https://media.rawg.io/media/games/34e/34e100b1f648de99f32d477065f04653.jpg',
        },
        {
          id: 117,
          name: 'Mystery',
          slug: 'mystery',
          language: 'eng',
          games_count: 12643,
          image_background:
            'https://media.rawg.io/media/games/7ba/7baf4663962bad7197e2470d59a6e322.jpg',
        },
        {
          id: 145,
          name: 'Choices Matter',
          slug: 'choices-matter',
          language: 'eng',
          games_count: 4420,
          image_background:
            'https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg',
        },
        {
          id: 120,
          name: 'Memes',
          slug: 'memes',
          language: 'eng',
          games_count: 1693,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 91,
          name: 'Walking Simulator',
          slug: 'walking-simulator',
          language: 'eng',
          games_count: 6646,
          image_background:
            'https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg',
        },
        {
          id: 218,
          name: 'Multiple Endings',
          slug: 'multiple-endings',
          language: 'eng',
          games_count: 7867,
          image_background:
            'https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg',
        },
        {
          id: 406,
          name: 'Story',
          slug: 'story',
          language: 'eng',
          games_count: 11302,
          image_background:
            'https://media.rawg.io/media/screenshots/439/4397f836727bdd13bd38deeb4f7355bb_GacwmJ9.jpg',
        },
        {
          id: 232,
          name: 'Episodic',
          slug: 'episodic',
          language: 'eng',
          games_count: 447,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 295,
          name: 'Soundtrack',
          slug: 'soundtrack',
          language: 'eng',
          games_count: 2908,
          image_background:
            'https://media.rawg.io/media/screenshots/18b/18b81812829bc49465e4a6d97af596c6_RdH7DXE.jpg',
        },
        {
          id: 317,
          name: 'Time Travel',
          slug: 'time-travel',
          language: 'eng',
          games_count: 1735,
          image_background:
            'https://media.rawg.io/media/screenshots/120/120530499012ea0149cfe358330b10c9.jpg',
        },
        {
          id: 302,
          name: 'Time Manipulation',
          slug: 'time-manipulation',
          language: 'eng',
          games_count: 460,
          image_background:
            'https://media.rawg.io/media/games/459/459ac8745027643ed7338516c0025cf7.jpg',
        },
        {
          id: 992,
          name: 'student',
          slug: 'student',
          language: 'eng',
          games_count: 1520,
          image_background:
            'https://media.rawg.io/media/screenshots/6cf/6cffd429041ea287e3cd8b1d53a9dfc5.jpg',
        },
        {
          id: 2682,
          name: 'strange',
          slug: 'strange',
          language: 'eng',
          games_count: 360,
          image_background:
            'https://media.rawg.io/media/screenshots/1d4/1d42ee97681050baedab12c082bb8b54.jpg',
        },
        {
          id: 3197,
          name: 'photography',
          slug: 'photography',
          language: 'eng',
          games_count: 203,
          image_background:
            'https://media.rawg.io/media/screenshots/c22/c22e3dfc119300f50b7fd0748eb9b41c.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 1826487,
          image:
            'https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg',
        },
        {
          id: 1826488,
          image:
            'https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg',
        },
        {
          id: 1826489,
          image:
            'https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg',
        },
        {
          id: 1826490,
          image:
            'https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg',
        },
        {
          id: 1826491,
          image:
            'https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg',
        },
        {
          id: 1826492,
          image:
            'https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg',
        },
      ],
    },
  ],
  seo_title: 'All Games',
  seo_description: '',
  seo_keywords: '',
  seo_h1: 'All Games',
  noindex: false,
  nofollow: false,
  description: '',
  filters: {
    years: [
      {
        from: 2020,
        to: 2023,
        filter: '2020-01-01,2023-12-31',
        decade: 2020,
        years: [
          {
            year: 2023,
            count: 60188,
            nofollow: false,
          },
          {
            year: 2022,
            count: 168097,
            nofollow: false,
          },
          {
            year: 2021,
            count: 158663,
            nofollow: false,
          },
          {
            year: 2020,
            count: 121334,
            nofollow: false,
          },
        ],
        nofollow: true,
        count: 508282,
      },
      {
        from: 2010,
        to: 2019,
        filter: '2010-01-01,2019-12-31',
        decade: 2010,
        years: [
          {
            year: 2019,
            count: 73674,
            nofollow: false,
          },
          {
            year: 2018,
            count: 67932,
            nofollow: false,
          },
          {
            year: 2017,
            count: 54582,
            nofollow: true,
          },
          {
            year: 2016,
            count: 40238,
            nofollow: true,
          },
          {
            year: 2015,
            count: 25890,
            nofollow: true,
          },
          {
            year: 2014,
            count: 15354,
            nofollow: true,
          },
          {
            year: 2013,
            count: 6335,
            nofollow: true,
          },
          {
            year: 2012,
            count: 5384,
            nofollow: true,
          },
          {
            year: 2011,
            count: 4312,
            nofollow: true,
          },
          {
            year: 2010,
            count: 3891,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 297592,
      },
      {
        from: 2000,
        to: 2009,
        filter: '2000-01-01,2009-12-31',
        decade: 2000,
        years: [
          {
            year: 2009,
            count: 3112,
            nofollow: true,
          },
          {
            year: 2008,
            count: 2042,
            nofollow: true,
          },
          {
            year: 2007,
            count: 1577,
            nofollow: true,
          },
          {
            year: 2006,
            count: 1294,
            nofollow: true,
          },
          {
            year: 2005,
            count: 1184,
            nofollow: true,
          },
          {
            year: 2004,
            count: 1178,
            nofollow: true,
          },
          {
            year: 2003,
            count: 1153,
            nofollow: true,
          },
          {
            year: 2002,
            count: 999,
            nofollow: true,
          },
          {
            year: 2001,
            count: 1123,
            nofollow: true,
          },
          {
            year: 2000,
            count: 1018,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 14680,
      },
      {
        from: 1990,
        to: 1999,
        filter: '1990-01-01,1999-12-31',
        decade: 1990,
        years: [
          {
            year: 1999,
            count: 792,
            nofollow: true,
          },
          {
            year: 1998,
            count: 735,
            nofollow: true,
          },
          {
            year: 1997,
            count: 875,
            nofollow: true,
          },
          {
            year: 1996,
            count: 773,
            nofollow: true,
          },
          {
            year: 1995,
            count: 869,
            nofollow: true,
          },
          {
            year: 1994,
            count: 822,
            nofollow: true,
          },
          {
            year: 1993,
            count: 749,
            nofollow: true,
          },
          {
            year: 1992,
            count: 659,
            nofollow: true,
          },
          {
            year: 1991,
            count: 581,
            nofollow: true,
          },
          {
            year: 1990,
            count: 540,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 7395,
      },
      {
        from: 1980,
        to: 1989,
        filter: '1980-01-01,1989-12-31',
        decade: 1980,
        years: [
          {
            year: 1989,
            count: 438,
            nofollow: true,
          },
          {
            year: 1988,
            count: 321,
            nofollow: true,
          },
          {
            year: 1987,
            count: 344,
            nofollow: true,
          },
          {
            year: 1986,
            count: 252,
            nofollow: true,
          },
          {
            year: 1985,
            count: 231,
            nofollow: true,
          },
          {
            year: 1984,
            count: 185,
            nofollow: true,
          },
          {
            year: 1983,
            count: 206,
            nofollow: true,
          },
          {
            year: 1982,
            count: 149,
            nofollow: true,
          },
          {
            year: 1981,
            count: 65,
            nofollow: true,
          },
          {
            year: 1980,
            count: 35,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 2226,
      },
      {
        from: 1970,
        to: 1979,
        filter: '1970-01-01,1979-12-31',
        decade: 1970,
        years: [
          {
            year: 1979,
            count: 15,
            nofollow: true,
          },
          {
            year: 1978,
            count: 17,
            nofollow: true,
          },
          {
            year: 1977,
            count: 13,
            nofollow: true,
          },
          {
            year: 1976,
            count: 7,
            nofollow: true,
          },
          {
            year: 1975,
            count: 3,
            nofollow: true,
          },
          {
            year: 1974,
            count: 2,
            nofollow: true,
          },
          {
            year: 1973,
            count: 1,
            nofollow: true,
          },
          {
            year: 1972,
            count: 2,
            nofollow: true,
          },
          {
            year: 1971,
            count: 6,
            nofollow: true,
          },
          {
            year: 1970,
            count: 1,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 67,
      },
      {
        from: 1960,
        to: 1969,
        filter: '1960-01-01,1969-12-31',
        decade: 1960,
        years: [
          {
            year: 1962,
            count: 1,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 1,
      },
      {
        from: 1950,
        to: 1959,
        filter: '1950-01-01,1959-12-31',
        decade: 1950,
        years: [
          {
            year: 1958,
            count: 1,
            nofollow: true,
          },
          {
            year: 1954,
            count: 1,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 2,
      },
    ],
  },
  nofollow_collections: ['stores'],
};
