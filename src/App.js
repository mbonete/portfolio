import styled from 'styled-components'
import Header from './sections/Header';
import Keywords from './sections/Keywords';
import Projects from './sections/Projects';

function App() {
  return (
    <Wrapper>
      <Header/> 
      <Keywords />
      <Projects />
    </Wrapper>
  );
}


const Wrapper = styled.div `
  min-height: 100%;
  min-width: 400px;
  position: relative;
`;


export default App;
