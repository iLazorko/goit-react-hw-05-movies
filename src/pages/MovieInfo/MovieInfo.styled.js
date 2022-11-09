import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 8px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  background-color: transparent;
  color: #be7474;
  border: 1px solid;
  border-color: #be7474;

  transform: scale(1);
  transition: color 300ms ease, border-color 300ms ease;

  &:hover,
  &:focus {
    color: #f7bfbf;
    border-color: #f7bfbf;
  }
`;

export { BackLink };
