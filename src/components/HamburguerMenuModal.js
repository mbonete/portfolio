import styled from 'styled-components';
import ReactModal from 'react-modal';
import { COLORS } from '../constants';
import LinkButton from './LinkButton';
import { VisuallyHidden } from "@reach/visually-hidden";
import { XCircle as Close} from 'react-feather'


function HamburguerMenuModal ({isOpen, onClose}) {
  ReactModal.setAppElement('#root');

  return (
    
      <ReactModal 
        isOpen={isOpen} 
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => <ModalStyle {...props}>{children}</ModalStyle>}
        overlayElement={(props, contentElement) => <OverlayStyle {...props}>{contentElement}</OverlayStyle>} 
      >
          <VisuallyHidden>Modal menu open</VisuallyHidden>

          <Header>
            <Title>Menu</Title>
          </Header>
          <Main>
            <LinkSection>
              <LinkButton menu= 'mobile' href='files/cv-maria-bonete.pdf' download='cv-maria-bonete.pdf'>Download CV</LinkButton>
              <LinkButton menu= 'mobile' href='https://github.com/mbonete'>Github</LinkButton>
              <LinkButton menu= 'mobile' href='https://www.linkedin.com/in/maria-bonete'>LinkedIn</LinkButton>
            </LinkSection>
          </Main>
          <Footer>
            <DismissButton menu= 'mobile' onClick={onClose}>
                Dismiss
                <Close strokeWidth={1.25}/>
            </DismissButton>
          </Footer>
      </ReactModal>
    
  )
}

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 70%;
  width: 80%;
  background-color: ${COLORS.sandYellow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border-radius: 15px;
  overflow: hidden;
  outline: transparent;

  @media screen and (min-width: 600px) {
      display: none;
    }
  }
`;


const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(0, 0%, 33%, 50%);

  @media screen and (min-width: 600px) {
    display: none;
  }
}
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  width: 100%;
  background-color: ${COLORS.sandBrown};
`;

const Title = styled.p`
  font-size: 1.25rem;
  text-align: center;
  padding: 8px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 4px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 50%;
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DismissButton = styled.button`
  display: flex;
  gap: 8px;
  background-color: ${COLORS.sandYellow};
  border: transparent;
  border-radius: 50px;
  color: ${COLORS.black};
  font-size: 1rem;
  text-transform: uppercase;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
`;

const Footer = styled(Header)`
  border-top: 8px double ${COLORS.sandYellow};
  background-color: ${COLORS.sandBrown};

`;


export default HamburguerMenuModal;