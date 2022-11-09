import { Link, useLocation } from 'react-router-dom';

import {
  MovieWrap,
  MovieInfoWrap,
  Title,
  InfoTitle,
  Wrapper,
  Item,
  StyledLink,
} from './MovieDetails.styled.js';

export const MovieDetails = ({ movie }) => {
  const { title, poster_path, overview, release_date, vote_average, genres } =
    movie;
  const location = useLocation();


  return (
    <>
      <MovieWrap>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={`${title}`}
          width="300"
        />
        <MovieInfoWrap>
          <Title>{title}</Title>
          <p>
            <InfoTitle>
              <b>Overview: </b>
            </InfoTitle>
            {overview}
          </p>
          <p>
            <InfoTitle>
              <b>Genres: </b>
            </InfoTitle>
            {genres
              ?.map(({ name }) => {
                return name;
              })
              .join(', ')}
          </p>
          <p>
            <InfoTitle>
              <b>Release date: </b>
            </InfoTitle>{' '}
            {release_date}
          </p>
          <p>
            <InfoTitle>
              <b>Vote average: </b>
            </InfoTitle>{' '}
            {vote_average}
          </p>
        </MovieInfoWrap>
        <Wrapper>
          <Item>
            <StyledLink to="cast" state={{ from: location.state.from }}>
              Cast
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="reviews" state={{ from: location.state.from }}>
              Reviews
            </StyledLink>
          </Item>
        </Wrapper>
      </MovieWrap>
    </>
  );
};
