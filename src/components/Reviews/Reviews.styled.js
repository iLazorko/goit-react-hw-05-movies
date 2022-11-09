import styled from 'styled-components';

const Heding = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  color: #7cfd82;
  text-align: center;
  margin-bottom: 40px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoMessage = styled.p`
  color: #be7474;
  font-size: 20px;
`;

const Text = styled.p`
  color: #cfcfcf;
  font-size: 18px;
  line-height: 1.7;
`;

const DateReview = styled.p`
  color: #706b6b;
  font-size: 14px;
  margin-bottom: 15px;
`;

const AutorReview = styled.p`
  color: #b8c640;
  font-size: 24px;
  margin-bottom: 15px;
`;
export { Heding, List, InfoMessage, Text, DateReview, AutorReview };
