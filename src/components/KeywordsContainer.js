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
    name: 'TypeScript',
    alt: 'TypeScript Logo',
    logoSrc: 'img/logos/logo-typescript.svg',
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
    name: 'Git',
    alt: 'Git Logo',
    logoSrc: 'img/logos/logo-git.svg',
  },
  {
    name: 'Jest',
    alt: 'Jest Logo',
    logoSrc: 'img/logos/logo-jest.png',
  },
  {
    name: 'React Query',
    alt: 'React Query Logo',
    logoSrc: 'img/logos/logo-react-query.svg',
  },
  {
    name: 'SWR',
    alt: 'SWR Logo',
    logoSrc: 'img/logos/logo-swr.png'
  },
  {
    name: 'Python',
    alt: 'Python Logo',
    logoSrc: 'img/logos/logo-python.svg',
  },
  {
    name: 'React Hook Form',
    alt: 'React Hook Form Logo',
    logoSrc: 'img/logos/logo-react-hook-form.png',
  },
  {
    name: 'Styled Components',
    alt: 'Styled Components Logo',
    logoSrc: 'img/logos/logo-styled-components.svg',
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
    padding: 8px;
  }
`;

const Keyword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 150px;
  width: clamp(50px, 15vw, 100px);
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: clamp(0.85rem, 2.5vw, 1.25rem);
  text-align: center;
  overflow-wrap: normal;
`;

const Logo = styled.img`
  height: clamp(45px, 15vw, 80px);
  aspect-ratio: 1 / 1;
  object-fit: contain;
`;

export default KeywordsContainer;