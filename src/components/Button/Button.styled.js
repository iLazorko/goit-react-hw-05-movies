import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: block;
  padding: 10px 30px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #067c11;
  color: #ffffff;
  background-color: #067c11;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  width: 180px;
  transition: background-color 300ms ease;

  &:hover,
  &:focus {
    background-color: #379d10;
  }
`;
