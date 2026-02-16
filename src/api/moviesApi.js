const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGM3OGQ3MjAzOGNjYzRhYWJmMjE1OGMwY2I0MzRiNyIsIm5iZiI6MTc3MTIyMzA1My41MTEwMDAyLCJzdWIiOiI2OTkyYjgwZDU4Y2ZhYzFmOGU5NTkyMTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nJo5M7d9UN_93R0om1o4FptVYTOCVz-4vA4ysGCcrf4';

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
};

export const fetchTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/day`, options);
  return res.json();
};

export const searchMovies = async query => {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${query}`,
    options
  );
  return res.json();
};

export const fetchMovieDetails = async movieId => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}`, options);
  return res.json();
};

export const fetchMovieCredits = async movieId => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/credits`, options);
  return res.json();
};

export const fetchMovieReviews = async movieId => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/reviews`, options);
  return res.json();
};