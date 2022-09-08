import styled from 'styled-components'
import Subtitle from '../components/Subtitle';
import { QUERIES, COLORS } from '../constants';


function Projects() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Subtitle>Side Projects</Subtitle>
        <ProjectContainer>
          <SVG src='img/ellipse.svg' alt=''/>
          <SVG src='img/mobileImg.svg' alt='A mobile showing the Guess The BPM project'/>
        </ProjectContainer>
      </MaxWidthWrapper>
      <Wave src='img/mustardWave.svg' alt='' />
    </Wrapper>
  );
}


const Wrapper = styled.div `
  isolation: isolate;
  position: relative;
  height: 600px;
  background-color: ${COLORS.mustardYellow};

`;

const MaxWidthWrapper = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 64px 150px 64px;

  @media ${QUERIES.desktopAndSmaller} {
    max-width: 1100px;
  }
  @media ${QUERIES.laptopAndSmaller} {
    max-width: 900px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 0 48px 100px 48px;
  }
`;

const ProjectContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SVG = styled.img`
  position: absolute;
  top: 0;
  height: 450px
`;

const Wave = styled.img`
  position: absolute;
  top: -100px;
  width: 100%;
  min-height: 110px;
  object-fit: cover;
  object-position: center;
`;
export default Projects;