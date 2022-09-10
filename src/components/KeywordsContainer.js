import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

const technologies = [
  {
    name: 'React',
    alt: 'React Logo',
    logoSrc: 'img/logos/logo-react.svg',
  },
  {
    name: 'JavaScript',
    alt: 'JavaScript Logo',
    logoSrc: 'img/logos/logo-js.svg',
  },
  {
    name: 'Node.js',
    alt: 'Node.js Logo',
    logoSrc: 'img/logos/logo-nodejs.svg',
  },
  {
    name: 'CSS',
    alt: 'CSS Logo',
    logoSrc: 'img/logos/logo-css.svg',
  },
  {
    name: 'HTML',
    alt: 'HTML Logo',
    logoSrc: 'img/logos/logo-html.svg',
  },
  {
    name: 'Github',
    alt: 'Github Logo',
    logoSrc: 'img/logos/logo-github.svg',
  },
  {
    name: 'Next.js',
    alt: 'Next.js Logo',
    logoSrc: 'img/logos/logo-next.svg',
  },
  {
    name: 'Styled Components',
    alt: 'Styled Components Logo',
    logoSrc: 'img/logos/logo-styled-components.svg',
  },
  {
    name: 'Python',
    alt: 'Python Logo',
    logoSrc: 'img/logos/logo-python.svg',
  },
  {
    name: 'Git',
    alt: 'Git Logo',
    logoSrc: 'img/logos/logo-git.svg',
  },
  {
    name: 'Figma',
    alt: 'Figma Logo',
    logoSrc: 'img/logos/logo-figma.svg',
  },
  {
    name: 'Photoshop',
    alt: 'Photoshop Logo',
    logoSrc: 'img/logos/logo-photoshop.svg',
  },
  {
    name: 'Illustrator',
    alt: 'Illustrator Logo',
    logoSrc: 'img/logos/logo-illustrator.svg',
  },
]

function KeywordsContainer() {
  return (
    <Keywords>
      { 
        technologies.map((tech) => (
          <Keyword key={tech.name}>
            <Logo src={tech.logoSrc} alt={tech.alt} />
            <Title>{tech.name}</Title>
          </Keyword> 
        ))
      }
    </Keywords>
  )
}

const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: fit-content;
  border: 8px dotted ${COLORS.primary};
  border-radius: 25px;
  padding: 32px;
  gap: 16px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 16px;
  }
`;

const Keyword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 150px;
  width: clamp(70px, 10vw, 100px);
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  text-align: center;
  overflow-wrap: normal;
`;

const Logo = styled.img`
  height: clamp(40px, 15vw, 80px);
`;

export default KeywordsContainer;