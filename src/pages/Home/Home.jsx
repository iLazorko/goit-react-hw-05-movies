import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieList } from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../API';
import { Heading, Section } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
 
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const trendingMovies = await getTrendingMovies();
        setMovies(prevState => [...prevState, ...trendingMovies]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      {isLoading && <p> Loading...</p>}
      {!isLoading && (
        <main>
          <Section>
            <Heading>Trending today</Heading>
            {movies && <MovieList movies={movies} location={location} />}
          </Section>
        </main>
      )}
    </>
  );
}
