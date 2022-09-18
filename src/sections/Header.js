import styled from 'styled-components';
import { Menu } from 'react-feather';
import { useState } from 'react';
import { COLORS, QUERIES } from '../constants';
import LinkButton from '../components/LinkButton';
import HamburguerMenuModal from '../components/HamburguerMenuModal';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <TitleSection>
          <Title>Maria Bonete</Title>
          <Subtitle>Front-end Developer</Subtitle>
        </TitleSection>
      
        <HamburguerMenuWrapper>
          <Menu size={40} onClick={() => setShowMobileMenu(true)}/>
          <HamburguerMenuModal 
            isOpen={showMobileMenu} 
            onClose={() => setShowMobileMenu(false)}
          />
        </HamburguerMenuWrapper>
        
        <ButtonSection>
          <LinkButton href='files/Cv-MariaBonete.pdf' download='Cv-MariaBonete.pdf'>Download CV</LinkButton>
          <LinkButton href='https://github.com/mbonete'>Github</LinkButton>
          <LinkButton href='https://www.linkedin.com/in/maria-bonete'>LinkedIn</LinkButton>
        </ButtonSection>
      </MaxWidthWrapper>
      <Wave src='img/group.svg' alt='' />  
      <Illustration src='img/plantsCare.svg' />

    </Wrapper>
  );
}

const Wrapper = styled.header`
  isolation: isolate;
  position: relative;
  height: 650px;
  width: 100%;
  background-color: ${COLORS.blueEsmerald};

  @media ${QUERIES.desktopAndSmaller} {
    height: 600px;
  };

  @media ${QUERIES.tabletAndSmaller} {
    height: 550px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    height: 300px;
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
    padding: 8px 64px;
    height: 500px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    padding: 0 48px 150px 48px;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 6vw, 3.9rem);
  margin-top: 80px;

  &::first-letter {
    color: ${COLORS.primary};
    font-weight: 900;
    font-size: 4.5rem;
    text-shadow: 6px 0 black;
    margin-right: 4px;
  }

  @media ${QUERIES.laptopAndSmaller} {
    margin-top: 100px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    max-width: 10ch;
    margin-top: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    &::first-letter {
      font-size: inherit;
      font-weight: revert;
      text-shadow: 4px 0 black;
    }
  }
`;
const Subtitle = styled.h2`
  color: ${COLORS.gray};
  font-size: clamp(2rem, 6vw, 3.7rem);
  font-weight: 400;
  @media ${QUERIES.phoneAndSmaller}{
    max-width: 10ch;
  }
`;

const HamburguerMenuWrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
    position: absolute;
    top: 40px;
    right: 32px;
    min-width: 55px;
    cursor: pointer;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  z-index: 3;

  @media ${QUERIES.laptopAndSmaller} {
    flex-direction: column;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Wave = styled.img`
  position: absolute;
  bottom: -5px;
  width: 100%;
  min-height: 380px;
  object-fit: cover;
  object-position: right;

  @media ${QUERIES.laptopAndSmaller} {
    object-position: left;
  }

  @media ${QUERIES.phoneAndSmaller} {
    min-height: 150px;
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