import styled from 'styled-components';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Main from './components/Layout/Main';

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
