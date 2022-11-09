import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { getMovieByName } from '../../API';

import { SearchForm } from './SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MovieList';
import { Section } from 'pages/Home/Home.styled';

export default function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    // const query = searchParams.get('query') ?? '';
    if (inputValue === '') {
      return;
    }

    // if (!query) {
    //   return;
    // }

    (async function fetchMovieByName() {
      try {
        setIsLoading(true);
        // const searchQuery = window.localStorage.getItem('query');
        const movieByName = await getMovieByName(inputValue, page);
        // const movieByName = await getMovieByName(query, page);
        const totalPages = Math.ceil(movieByName.total_results / 20);

        setTotal(totalPages);

        setMovies(prevState => [...prevState, ...movieByName.results]);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [inputValue, page]);
  // }, [page, searchParams]);

  // const updateQuery = query => {
  //   const nextParams = query !== '' ? { query: query } : {};
  //   setSearchParams(nextParams);
  // };

  // const handleSearch = value => {
  //   setSearchParams({ query: value });
  // };
  const handleSubmit = evt => {
    evt.preventDefault();

    const inputValue = evt.currentTarget.elements.searchValue.value;
    // updateQuery(inputValue);
    // window.localStorage.setItem('query', inputValue);
    setInputValue(inputValue);
    // updateStateQuery(inputValue);
    evt.currentTarget.reset();
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  // const updateStateQuery = () => {
  //   setMovies([]);
  //   setPage(1);
  // };

  return (
    <>
      <Section>
        <SearchForm onSubmit={handleSubmit} />
        {/* <SearchForm onChange={handleSearch} /> */}

        {movies.length > 0 && (
          <div>
            <h2>Movie List</h2>

            {/* from: "/dashboard?name=hoodie" */}

            {/* <MovieList
              movies={movies}
              state={{ from: `/movie?query=${inputValue}` }}
            /> */}
            <MovieList movies={movies} state={{ from: location }} />
            {/* <ul>
              {movies.map(movie => {
                return (
                  <li key={movie.id}>
                    <Link to={`${movie.id}`} state={{ from: location }}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        width="50"
                      />
                      <p>{movie.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ul> */}
          </div>
        )}
        {page > 0 && page < total && !isLoading && (
          <button type="button" onClick={loadMore}>
            Load more
          </button>
        )}
        {total === 0 && <div>нет таких фильмов</div>}
      </Section>
    </>
  );
}
