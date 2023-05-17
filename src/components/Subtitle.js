import styled from 'styled-components';
import { QUERIES, COLORS } from '../constants'; 

function Subtitle({children}) {
  return (
    <Title>{children}</Title>
  )
}

const Title = styled.h2`
  font-size: 3rem;
  line-height: 2;
  
  &::first-letter {
    color: ${COLORS.primary};
    font-weight: 900;
    font-size: 3.15rem;
    text-shadow: 4px 0 black;
    margin-right: 4px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1.65rem;
    line-height: revert;

    &::first-letter {
      text-shadow: 2px 0 black;
      font-size: 1.8rem;

    }
  }
`;

export default Subtitle;