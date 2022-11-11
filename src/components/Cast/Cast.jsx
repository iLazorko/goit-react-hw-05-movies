import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActors } from '../../API';
import { Section } from '../../pages/Home/Home.styled.js';
import { Loader } from '../../components/Loader/Loader';

import {
  Heding,
  CastList,
  Item,
  InfoActor,
  InfoCharacter,
} from './Cast.styled.js';
import defaultImg from '../../img/anonymous.jpg';

export default function Cast() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function fetchActors() {
      setIsLoading(true);
      try {
        const movieCasts = await getActors(movieId);
        setCastList(movieCasts);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  return (
    <Section>
      {isLoading && <Loader />}
      {!isLoading && castList.length > 0 && (
        <>
          <Heding>Cast</Heding>
          <CastList>
            {castList.map(({ id, name, character, profile_path }) => {
              return (
                <Item key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : defaultImg
                    }
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
