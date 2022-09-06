import styled from 'styled-components'
import { COLORS, QUERIES } from '../constants';
import KeywordsContainer from '../components/KeywordsContainer';


function Keywords() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Title>Some Technologies I Use...</Title>
        <KeywordsContainer/>
      </MaxWidthWrapper>
      <Wave src='img/mustardWave.svg' alt='' />
    </Wrapper>
  );
}


const Wrapper = styled.div `
  isolation: isolate;
  position: relative;
  width: 100%;
  height: 650px;
  background-color: ${COLORS.secondary};
  padding: 16px;
`;

const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media ${QUERIES.desktopAndSmaller} {
    max-width: 1100px;
  }
  @media ${QUERIES.laptopAndSmaller} {
    max-width: 900px;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  padding: 16px;
  padding-top: 0;

  &::first-letter {
    color: ${COLORS.primary};
    font-weight: 900;
    text-shadow: 4px 0 black;
    margin-right: 4px;
  }

  @media ${QUERIES.laptopAndSmaller} {
    font-size: 2.4rem;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 2rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    &::first-letter {
      text-shadow: 2px 0 black;
    }
  }
`;

const Wave = styled.img`
  position: absolute;
  bottom: -10px;
  width: 100%;
  min-height: 100px;
  object-fit: cover;
  object-position: right;
`;
export default Keywords;