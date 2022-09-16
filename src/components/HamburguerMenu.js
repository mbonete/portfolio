import styled from 'styled-components';
import { COLORS } from '../constants';
import LinkButton from './LinkButton';

function HamburguerMenu ({isOpen}) {
  return (
    <Wrapper>
      <Header>
        <Title>Menu</Title>
      </Header>
        
        <LinkButton menu= 'mobile' href='files/Cv-MariaBonete.pdf' download='Cv-MariaBonete.pdf'>Download CV</LinkButton>
        <LinkButton menu= 'mobile' href='https://github.com/mbonete'>Github</LinkButton>
        <LinkButton menu= 'mobile' href='https://www.linkedin.com/in/maria-bonete'>LinkedIn</LinkButton>
      <Footer>
        <Text> Made with love from Spain. Maria Bonete Salmeron</Text>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  isolation: isolate;
  z-index: 4;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 80%;
  background-color: ${COLORS.sandYellow};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  width: 100%;
  background-color: ${COLORS.sandBrown}
`;

const Title = styled.p`
  font-size: 1.85rem;
  color: ${COLORS.primary};
  text-align: center;
  padding: 16px;
  text-transform: uppercase;
  font-weight: 700;
`;

const Footer = styled(Header)`
  background-color: ${COLORS.gray};
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${COLORS.white};
  text-align: center;
  padding: 16px;
`;

export default HamburguerMenu;