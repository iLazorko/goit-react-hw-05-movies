import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from '../../API';
import { Loader } from '../../components/Loader/Loader';
import { Section } from '../../pages/Home/Home.styled.js';
import {
  Heding,
  InfoMessage,
  Text,
  DateReview,
  AutorReview,
  List,
} from './Reviews.styled.js';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function fetchReviews() {
      setIsLoading(true);
      try {
        const movieReviews = await getReviews(movieId);
        setReviews(movieReviews);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && reviews.length > 0 && (
        <Section>
          <Heding>Reviews</Heding>
          <List>
            {reviews.map(({ author, content, id, updated_at }) => {
              return (
                <li key={id}>
                  <AutorReview>
                    <b>{author}</b>
                  </AutorReview>
                  <DateReview>{updated_at.split('T')[0]}</DateReview>
                  <Text>"{content}"</Text>
                </li>
              );
            })}
          </List>
        </Section>
      )}

      {!isLoading && reviews.length === 0 && (
        <Section>
          <InfoMessage>
            Sorry, we don't have any reviews for this movie.
          </InfoMessage>
        </Section>
      )}
    </>
  );
}
