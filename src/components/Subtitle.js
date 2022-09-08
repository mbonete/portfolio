import styled from 'styled-components';
import { QUERIES, COLORS } from '../constants'; 

function Subtitle({children}) {
  return (
    <Title>{children}</Title>
  )
}

const Title = styled.h2`
  font-size: 3rem;

  &::first-letter {
    color: ${COLORS.primary};
    font-weight: 900;
    font-size: 3.15rem;
    text-shadow: 4px 0 black;
    margin-right: 4px;
  }

  @media ${QUERIES.laptopAndSmaller} {
    font-size: 2.4rem;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 2.25rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    &::first-letter {
      text-shadow: 2px 0 black;
    }
  }
`;

export default Subtitle;