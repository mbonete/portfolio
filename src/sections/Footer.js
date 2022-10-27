import styled from 'styled-components';
import { COLORS } from '../constants';

export default function Footer() {
  return( 
    <Wrapper>
      <Text> Made with love from Spain. Maria Bonete</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${COLORS.sandYellow};
  border-top: 8px double ${COLORS.mustardYellow};
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${COLORS.black};
  letter-spacing: 2;
  text-align: center;
  padding: 16px;
  margin: 24px 0;
`;