import styled from 'styled-components';

const Heding = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  color: #7cfd82;
  text-align: center;
  margin-bottom: 40px;
`;

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const Item = styled.li`
  width: 150px;
  height: 305px;
`;

const InfoActor = styled.p`
  text-align: center;
  color: #7cfd82;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InfoCharacter = styled.p`
  text-align: center;
  color: #999973;
`;

export { Heding, CastList, Item, InfoActor, InfoCharacter };
