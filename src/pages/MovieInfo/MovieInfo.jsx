import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { getMovieById } from '../../API';

import { Section } from '../Home/Home.styled.js';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import { BackLink } from './MovieInfo.styled.js';

export default function MovieInfo() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  // console.log(location.pathname);
  // const url = location.pathname === '/' ? `movies/` : '';

  // console.log(location.state);

  const backLinkHref = location.state?.from ?? '/';

  // const backLinkHref = location.state.from;
  useEffect(() => {
    (async function fetchMovieById() {
      try {
        const movieById = await getMovieById(movieId);

        setMovie(movieById);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <main>
      <Section>
        {/* <BackLink to={backLinkHref} state={{ from: location }}> */}
        <BackLink to={backLinkHref}>Go back</BackLink>
        <MovieDetails movie={movie} />
      </Section>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
