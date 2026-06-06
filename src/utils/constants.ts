export const BACKGROUND_IMAGE_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
export const BACKGROUND_IMAGE_SRC_SET = "https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_small.jpg 959w"
export const PROFILE_ICON_URL = "https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229"
export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
    }
};
export const TMDB_GET_NOW_PLAYING_URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const FORM_TMDB_MOVIE_URL = (movieId: string | number) => `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w780";
export const TMDB_GET_POPULAR_URL = "https://api.themoviedb.org/3/movie/popular";
export const TMDB_GET_TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated";
export const TMDB_GET_UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming";
export const TMDB_GET_MOVIE_BY_NAME_URL = (movieName: string) => `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}`;