import styled from 'styled-components';
import { QUERIES, COLORS } from '../constants'; 

function Subtitle({children}) {
  return (
    <Title>{children}</Title>
  )
}

const Title = styled.h2`
  font-size: clamp(1.8rem, 4.5vw, 3rem);

  &::first-letter {
    color: ${COLORS.primary};
    font-weight: 900;
    font-size: 3.15rem;
    text-shadow: 4px 0 black;
    margin-right: 4px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    &::first-letter {
      text-shadow: 2px 0 black;
    }
  }
`;

export default Subtitle;