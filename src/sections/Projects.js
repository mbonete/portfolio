import styled from 'styled-components'
import { 
  ExternalLink,
  Music,
  Volume2,
  GitHub,
  Home,
  Key,
} from 'react-feather';
import Subtitle from '../components/Subtitle';
import { QUERIES, COLORS } from '../constants';


function Projects() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Subtitle>Side Projects</Subtitle>
        <Grid>
          <Side>
            <ProjectLinkTitle href='https://www.guess-the-bpm.com/' target='_blank' >
              Guess The BPM
              <ExternalLink />
            </ProjectLinkTitle>
            <IconWrapper>
              <Volume2 color={COLORS.orangeRed} size={80}/>
              <Music color={COLORS.purpleBlue} size={80}/>
            </IconWrapper>
            <Source href='https://github.com/mbonete/guess-the-bpm' target='_blank'>
                <GitHub size={'clamp(30px, 2vw, 50px)'} fontWeight={700}/>
                Guess The BPM
            </Source>
          </Side>

          <ProjectContainer href='https://www.guess-the-bpm.com/' target='_blank' rel="noreferrer">
            <SVG src='img/ellipse.svg' alt='' draggable={false}/>
            <SVG src='img/mobileSvg.svg' alt='A mobile showing the Guess The BPM project' draggable={false}/>
          </ProjectContainer>

          <ProjectDisclosed>
            
            <Introduction>
              A game in which the user reproduces a song, and tries to guess its beats per minute by taping a button rhythmically!
            </Introduction>
          </ProjectDisclosed>
        </Grid>
      </MaxWidthWrapper>

      <HomelyProjectWrapper>
        <ProjectLinkTitle href='https://github.com/mbonete/homely' target='_blank' >
          Homely
          <ExternalLink />
        </ProjectLinkTitle>
        <Introduction>
          Minimal real estate platform that serves as a proof of concept for integration with a CRUD API, utilizing a range of libraries such as React, React Hook Forms, React Query, Axios, MaterialUI, and StyledComponents.
        </Introduction>
        
        <VideoGrid>
          
          <VideoWrapper>
            <video controls>
              <source src='video/homely-trailer.mp4' type="video/mp4"/>
            </video>
          </VideoWrapper>
          <Side>
            <IconWrapper style={{marginTop: '50px'}}>
              <Home color={COLORS.purpleBlue} size={80}/>
              <Key color={COLORS.orangeRed} size={80}/>
            </IconWrapper>
            <Source href='https://github.com/mbonete/homely' target='_blank'>
              <GitHub size={'clamp(30px, 2vw, 50px)'} fontWeight={700}/>
              Homely
            </Source>
          </Side>
        </VideoGrid>

        
        
      </HomelyProjectWrapper>
      <Wave src='img/mustardWave.svg' alt='' draggable={false} />
    </Wrapper>
  );
}


const Wrapper = styled.div `
  isolation: isolate;
  position: relative;
  height: fit-content;
  background-color: ${COLORS.mustardYellow};
  padding-bottom: 16px;
  
`;

const MaxWidthWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  @media ${QUERIES.desktopAndSmaller} {
    max-width: 1100px;
    padding-top: 16px;
  }
  @media ${QUERIES.laptopAndSmaller} {
    max-width: 900px;
    align-items: center;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 450px;
  height: 100%;
  width: 100%;
  padding: 32px 0;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 100%;
    grid-template-rows: 60px 100px 500px;
    justify-items: center;
    gap: 16px;
    grid-template-areas:
    'title'
    'disclosure'
    'svg'
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${QUERIES.tabletAndSmaller} {
    grid-area: title;
    align-items: center;
    justify-content: center;
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
  justify-content: flex-start;
  gap: 8px;
  text-decoration: none;
  font-size: 2.25rem;
  color: ${COLORS.primary};
  font-weight: 900;

  &:hover {
    text-decoration: revert;
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 2rem;
  }
`;

const Source = styled.a`
  text-decoration: none;
  color: ${COLORS.primary};
  border: 3px solid ${COLORS.primary};
  border-radius: 15px;
  width: fit-content;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: revert;
    color: revert;
    background-color: revert;
  }
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Introduction = styled.h3`
  font-size: 1.25rem;
  line-height: 2.5;
  text-align: center;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1rem;
    line-height: 2.25;
  }
`;

const ProjectContainer = styled.a`
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
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const HomelyProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100%;
  margin: 64px auto;
  gap: 24px;
  max-width: 1400px;

  @media ${QUERIES.desktopAndSmaller} {
    max-width: 1100px;
  
  }
  @media ${QUERIES.laptopAndSmaller} {
    max-width: 900px;
    padding: 16px;
  
  }

`;

const VideoWrapper = styled.div`
  filter: drop-shadow(0px 0.5px 3px rgba(0, 0, 0, 0.2)) drop-shadow(0px 1.7px 6px rgba(0, 0, 0, 0.19));
  background-color: ${COLORS.sandYellow};
  border-radius: 4px;
  padding: 8px;
  width: 90%;
  @media ${QUERIES.tabletAndSmaller} {
    grid-area: video;
    padding: 4px;
    width: 100%;
  }`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  justify-items: space-between;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    gap: 16px;
    grid-template-areas:
    'title'
    'disclosure'
    'video'
    'video'
  }
`;



const Wave = styled.img`
  position: absolute;
  top: -100px;
  width: 100%;
  min-height: 110px;
  object-fit: cover;
  object-position: center;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
`;


export default Projects;