import styled from 'styled-components';
import { COLORS } from '../constants';

function LinkButton ({children, href, download = null}) {
  return (
    <Button href={href} download={download} target="_blank">{children}</Button>
  )
}

const Button = styled.a`
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

export default LinkButton;