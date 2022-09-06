import styled from 'styled-components';
import LinkButton from '../components/LinkButton';
import { COLORS, QUERIES } from '../constants';

function Header() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Title>Maria Bonete Front-end Developer</Title>
        <ButtonSection>
          <LinkButton href='files/Cv-MariaBonete.pdf' download='Cv-MariaBonete.pdf'>Download CV</LinkButton>
          <LinkButton href='https://github.com/mbonete'>Github</LinkButton>
          <LinkButton href='https://www.linkedin.com/in/maria-bonete/'>LinkedIn</LinkButton>
        </ButtonSection>
      </MaxWidthWrapper>
      <Wave src='img/group.svg' alt='' />  
      <Illustration src='img/plantsCare.svg' />

    </Wrapper>
  );
}

const Wrapper = styled.div`
  isolation: isolate;
  position: relative;
  height: 650px;
  width: 100%;
  background-color: ${COLORS.blueEsmerald};

  @media ${QUERIES.desktopAndSmaller} {
    height: 600px;
  };

  @media ${QUERIES.tabletAndSmaller} {
    height: 500px;
  }
`;

const MaxWidthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  @media ${QUERIES.desktopAndSmaller} {
    max-width: 1100px;
  }
  @media ${QUERIES.laptopAndSmaller} {
    max-width: 900px;
  }
  @media ${QUERIES.tabletAndSmaller} {
    height: 500px;
    padding: 16px;
  }
`;

const Title = styled.h1`
  position: relative;
  font-size: 3.9rem;
  max-width: 13ch;
  margin-top: 80px;

  &::first-letter {
    color: ${COLORS.primary};
    font-weight: 900;
    text-shadow: 6px 0 black;
    margin-right: 4px;
  }

  @media ${QUERIES.laptopAndSmaller} {
    font-size: 3.4rem;
    margin-top: 100px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 3rem;
    margin: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {

    &::first-letter {
      text-shadow: 4px 0 black;
    }
  }
`;

const ButtonSection = styled.div`
  display: flex;

  @media ${QUERIES.laptopAndSmaller} {
    flex-direction: column;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Wave = styled.img`
  position: absolute;
  bottom: -10px;
  width: 100%;
  min-height: 400px;
  object-fit: cover;
  object-position: right;

  @media ${QUERIES.laptopAndSmaller} {
    object-position: left;
  }

`;


const Illustration = styled.img`
  position: absolute;
  bottom: -50px;
  right: 0px;
  height: 85%;

  @media ${QUERIES.desktopAndSmaller} {
    height: 95%;
  }
  @media ${QUERIES.laptopAndSmaller} {
    display: none;
  }
`;

export default Header;