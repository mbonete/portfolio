import styled from 'styled-components'
import Footer from './sections/Footer';
import Header from './sections/Header';
import Keywords from './sections/Keywords';
import Projects from './sections/Projects';

function App() {
  return (
    <Wrapper>
      <Header/> 
      <Keywords />
      <Projects />
      <Footer />
    </Wrapper>
  );
}


const Wrapper = styled.div `
  min-height: 100%;
  min-width: 300px;
  position: relative;
`;


export default App;
