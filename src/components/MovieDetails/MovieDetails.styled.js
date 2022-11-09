import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MovieWrap = styled.div`
  position: relative;
  display: flex;
  color: #fff;
  gap: 40px;
`;

const MovieInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 20px;
  padding-top: 30px;
  line-height: 1.7;
`;

const Title = styled.h2`
  font-size: 30px;
  color: #dbe395;
`;

const InfoTitle = styled.span`
  color: #727272;
`;

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 60px;
  background-color: #000000ab;
`;

const Item = styled.li`
  padding: 8px;
  background-color: #067c11;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background-color: #3eb810;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
`;

export {
  MovieWrap,
  MovieInfoWrap,
  InfoTitle,
  Title,
  Wrapper,
  StyledLink,
  Item,
};
