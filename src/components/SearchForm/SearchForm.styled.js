import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 400px;
  padding: 10px;
  font-weight: 500;
  background-color: #242227;
  border: 1px solid green;
  color: #ffffff;
  transition: outline 300ms ease;

  &:focus,
  &:hover {
    outline: 2px solid #59ff1b;
  }

  &::placeholder {
    color: #ffffff;
  }
`;

const SearchBtn = styled.button`
  background-color: #067c11;
  padding: 10px 30px;
  border: 1px solid #067c11;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 300ms ease;

  &:focus,
  &:hover {
    background-color: #379d10;
  }
`;

export { Form, Input, SearchBtn };
