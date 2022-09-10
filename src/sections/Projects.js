import styled from 'styled-components'
import { 
  ExternalLink,
  Music,
  Volume2,
  GitHub,
} from 'react-feather';
import Subtitle from '../components/Subtitle';
import { QUERIES, COLORS } from '../constants';


function Projects() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Side>
          <Subtitle>Side Projects</Subtitle>
          <IconWrapper>
            <Volume2 color={COLORS.orangeRed} size={80}/>
            <Music color={COLORS.purpleBlue} size={80}/>
          </IconWrapper>
          <Source href='https://github.com/mbonete/guess-the-bpm' target='_blank'>
              <GitHub size={'clamp(30px, 2vw, 50px)'} fontWeight={700}/>
          </Source>
        </Side>

        <ProjectContainer>
          <SVG src='img/ellipse.svg' alt=''/>
          <SVG src='img/mobileSvg.svg' alt='A mobile showing the Guess The BPM project'/>
        </ProjectContainer>

        <ProjectDisclosed>
          <ProjectLinkTitle href='https://www.guess-the-bpm.com/' target='_blank' >
            Guess The BPM
            <ExternalLink />
          </ProjectLinkTitle>
          
          <Introduction>
            A game in which the user reproduces a song, and tries to guess its beats per minute by taping a button rhythmically!
          </Introduction>
        </ProjectDisclosed>
        

      </MaxWidthWrapper>
      <Wave src='img/mustardWave.svg' alt='' />
    </Wrapper>
  );
}


const Wrapper = styled.div `
  isolation: isolate;
  position: relative;
  height: fit-content;
  background-color: ${COLORS.mustardYellow};

`;
const MaxWidthWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 450px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 32px 0;
  max-width: 1400px;


  @media ${QUERIES.desktopAndSmaller} {
    max-width: 1100px;
  }
  @media ${QUERIES.laptopAndSmaller} {
    max-width: 900px;
  }
  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 1fr);
    justify-items: center;
    gap: 16px;
    grid-template-areas:
    'title'
    'svg'
    'svg'
    'svg'
    'svg'
    'disclosure';
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${QUERIES.tabletAndSmaller} {
    grid-area: title;
    align-items: center;
  }
`;

const IconWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  height: 50%;
  margin: 16px; 
  transform: rotate(-20deg);

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;


const ProjectDisclosed = styled.div`
  max-width: 325px;
  justify-self: end;
  align-self: center;
  text-align: center;

  @media ${QUERIES.tabletAndSmaller} {
    grid-area: disclosure;
    justify-self: center;
  }
`;

const ProjectLinkTitle = styled.a`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  text-decoration: none;
  font-size: 2.25rem;
  color: ${COLORS.primary};
  font-weight: 900;

  &:hover {
    text-decoration: revert;
  }
`;

const Source = styled.a`
  text-decoration: none;
  color: ${COLORS.primary};
  border: 3px solid ${COLORS.primary};
  border-radius: 15px;
  width: fit-content;
  padding: 8px;

  &:hover {
    color: revert;
    background-color: revert;
  }
`;

const Introduction = styled.h3`
  font-size: 1.25rem;
  line-height: 2.5;
`;

const ProjectContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${QUERIES.tabletAndSmaller} {
    grid-area: svg;
  }
`;

const SVG = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  max-height: fit-content;
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