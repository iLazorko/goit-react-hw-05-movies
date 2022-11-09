import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActors } from '../../API';

import { Section } from '../../pages/Home/Home.styled.js';

import {
  Heding,
  CastList,
  Item,
  InfoActor,
  InfoCharacter,
} from './Cast.styled.js';

export default function Cast() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    (async function fetchActors() {
      try {
        const movieCasts = await getActors(movieId);

        setCastList(movieCasts);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  return (
    <Section>
      {castList.length > 0 && (
        <>
          <Heding>Cast</Heding>
          <CastList>
            {castList.map(({ id, name, character, profile_path }) => {
              return (
                <Item key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
                    alt={`${name}`}
                    width="150"
                  />
                  <InfoActor>{name}</InfoActor>
                  <InfoCharacter>{character}</InfoCharacter>
                </Item>
              );
            })}
          </CastList>
        </>
      )}
    </Section>
  );
}
