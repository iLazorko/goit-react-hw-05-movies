import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const Item = styled.li`
  background-color: #000;

  &:hover {
    box-shadow: 0px 0px 7px 6px rgb(53 100 39);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

const MovieInfoWrap = styled.div`
  background-color: #000;
  padding-bottom: 10px;
`;

const MovieInfo = styled.p`
  display: block;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  padding-top: 10px;
`;
export { List, Item, StyledLink, MovieInfoWrap, MovieInfo };
