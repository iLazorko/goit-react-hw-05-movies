import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMovieByName } from '../../API';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MovieList';
import { Section } from 'pages/Home/Home.styled';
import { Loader } from '../../components/Loader/Loader';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const movieName = searchParams.get('query');

    if (!movieName) {
      return;
    }

    async function fetchMovieByName(movieName) {
      try {
        setIsLoading(true);
        const moviesByName = await getMovieByName(movieName);
        console.log(movieName);
        console.log(moviesByName);
        console.log(moviesByName.results);
        setMovies(moviesByName.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        console.log(error.message);
      }
    }
    fetchMovieByName(movieName);
  }, [searchParams]);

  const updateQuery = inputValue => {
    setSearchParams({ query: inputValue });
  };

  return (
    <>
      <main>
        <Section>
          <SearchForm updateQuery={updateQuery} />
          {isLoading && <Loader />}
          {movies.length > 0 && (
            <div>
              <MovieList movies={movies} state={{ from: location }} />
            </div>
          )}
        </Section>
      </main>
    </>
  );
}
