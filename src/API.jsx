import axios from 'axios';

const KEY = '592f788186491be4ee714869feb8dcec';
const URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = URL;

// запит на фільми в тренді

export const getTrendingMovies = async () => {
  try {
    const fetchTrendingMovies = await axios.get(
      `trending/movie/day?api_key=${KEY}`
    );

    return await fetchTrendingMovies.data.results;
  } catch (error) {
    console.log(error);
  }
};

// запит на фільм по id

//api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const getMovieById = async id => {
  try {
    const fetchMovieById = await axios.get(
      `movie/${id}?api_key=${KEY}&language=en-US`
    );

    return await fetchMovieById.data;
  } catch (error) {
    console.log(error);
  }
};

// пошук фільмів

export const getMovieByName = async name => {
  try {
    const fetchMovieByName = await axios.get(
      `search/movie/?api_key=${KEY}&language=en-US&query=${name}&include_adult=false`
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
      `movie/${id}/credits?api_key=${KEY}&language=en-US`
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
      `movie/${id}/reviews?api_key=${KEY}&language=en-US`
    );

    return await fetchReviews.data.results;
  } catch (error) {
    console.log(error);
  }
};
