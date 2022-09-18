import styled from 'styled-components';
import ReactModal from 'react-modal';
import { COLORS } from '../constants';
import LinkButton from './LinkButton';

function HamburguerMenuModal ({isOpen, onClose}) {
  return (
    <ReactModal 
      isOpen={isOpen} 
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldReturnFocusAfterClose={true}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          position: 'fixed',
          inset: '0px 0px 0px auto',
          height: '100%',
          width: '80%',
          backgroundColor: `${COLORS.sandYellow}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 0,
        }
      }}
    >
        <Header>
          <Title>Menu</Title>
        </Header>
          
          <LinkButton menu= 'mobile' href='files/Cv-MariaBonete.pdf' download='Cv-MariaBonete.pdf'>Download CV</LinkButton>
          <LinkButton menu= 'mobile' href='https://github.com/mbonete'>Github</LinkButton>
          <LinkButton menu= 'mobile' href='https://www.linkedin.com/in/maria-bonete'>LinkedIn</LinkButton>
        <Footer>
          <Text> Made with love from Spain. Maria Bonete Salmeron</Text>
        </Footer>
    </ReactModal>
  )
}


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
  letter-spacing: 4px;
`;

const Footer = styled(Header)`
  background-color: ${COLORS.sandYellow};
  border-top: 4px solid ${COLORS.sandBrown};
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${COLORS.black};
  text-align: center;
  padding: 16px;
`;

export default HamburguerMenuModal;