import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return (
    <GlobalComponents>
      <Header />
      <Main />
      <Footer />
    </GlobalComponents>
  );
};

const GlobalComponents = styled.div`
  font-family: 'Lato', 'Yu Gothic', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #494949;
`;

export default App;
