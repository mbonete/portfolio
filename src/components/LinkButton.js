import styled from 'styled-components';
import { COLORS } from '../constants';

function LinkButton ({children, href, download = null, menu = 'desktop'}) {

  let Button = menu === 'mobile' ? MobileMenuButton : DesktopButton;

  return (
    <Button href={href} download={download} target="_blank">{children}</Button>
  )
}

const DesktopButton = styled.a`
  min-width: 210px;
  margin: 16px;
  text-align: center;
  padding: 16px 32px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  font-size: 1.5rem;
  border-radius: 50px;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

const MobileMenuButton = styled(DesktopButton)`
  font-size: 1.25rem;
  background-color: transparent;
  color: ${COLORS.primary};
  text-transform: uppercase;
`;

export default LinkButton;