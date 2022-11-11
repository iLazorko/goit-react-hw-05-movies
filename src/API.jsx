import axios from 'axios';

// const KEY = '592f788186491be4ee714869feb8dcec';

const KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const URL = 'https://api.themoviedb.org/';
axios.defaults.baseURL = URL;

// запит на фільми в тренді

export const getTrendingMovies = async () => {
  try {
    const fetchTrendingMovies = await axios.get(
      `3/trending/movie/day?api_key=${KEY}`
    );

    return await fetchTrendingMovies.data.results;
  } catch (error) {
    console.log(error);
  }
};

// запит на фільм по id

export const getMovieById = async id => {
  try {
    const fetchMovieById = await axios.get(
      `3/movie/${id}?api_key=${KEY}&language=en-US`
    );

    return await fetchMovieById.data;
  } catch (error) {
    console.log(error);
  }
};

// пошук фільмів

export const getMovieByName = async (name, page = 1) => {
  try {
    const fetchMovieByName = await axios.get(
      `3/search/movie?api_key=${KEY}&language=en-US&query=${name}&page=${page}&include_adult=false`
      // `search/movie/?api_key=${KEY}&language=en-US&query=${name}&page=${page}&include_adult=false`
    );
    return await fetchMovieByName.data;
  } catch (error) {
    console.log(error);
  }
};

// запит акторів

export const getActors = async id => {
  try {
    const fetchActors = await axios.get(
      `3/movie/${id}/credits?api_key=${KEY}&language=en-US`
    );

    return await fetchActors.data.cast;
  } catch (error) {
    console.log(error);
  }
};

// запит відгуків

export const getReviews = async id => {
  try {
    const fetchReviews = await axios.get(
      `3/movie/${id}/reviews?api_key=${KEY}&language=en-US`
    );

    return await fetchReviews.data.results;
  } catch (error) {
    console.log(error);
  }
};
