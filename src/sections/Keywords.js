import styled from 'styled-components'
import { COLORS, QUERIES } from '../constants';
import KeywordsContainer from '../components/KeywordsContainer';
import Subtitle from '../components/Subtitle';


function Keywords() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Subtitle>Some Technologies I Use...</Subtitle>
        <KeywordsContainer/>
      </MaxWidthWrapper>
    </Wrapper>
  );
}


const Wrapper = styled.div `
  width: 100%;
  height: fit-content;
  background-color: ${COLORS.secondary};
  padding: 0 64px 150px 64px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 0 48px 100px 48px;
  }
`;

const MaxWidthWrapper = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  @media ${QUERIES.desktopAndSmaller} {
    max-width: 1100px;
  }
  @media ${QUERIES.laptopAndSmaller} {
    max-width: 900px;

  }
`;

export default Keywords;