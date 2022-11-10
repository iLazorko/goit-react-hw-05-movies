import PropTypes from 'prop-types';
import {
  List,
  StyledLink,
  Item,
  MovieInfoWrap,
  MovieInfo,
} from './MovieList.styled.js';

export const MovieList = ({ movies, state }) => {
  return (
    <>
      <List>
        {movies.map(({ id, poster_path, title, release_date }) => {
          const date = release_date.slice(0, 4);
          return (
            <Item key={id}>
              <StyledLink to={`/movies/${id}`} state={state}>
                <MovieInfoWrap>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                  />
                  <MovieInfo>"{title}"</MovieInfo>
                  <MovieInfo>{date}</MovieInfo>
                </MovieInfoWrap>
              </StyledLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
  state: PropTypes.object,
};
