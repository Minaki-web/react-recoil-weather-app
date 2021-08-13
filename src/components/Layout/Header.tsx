import styled from 'styled-components';

import Mainvisual from '../../assets/mainvisual.jpg';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  return (
    <SHeader>
      <h1>3 Hours Weather Forecast</h1>
      <img src={Mainvisual} alt="" />
      <div className="header__contents">
        <SearchBar />
      </div>
    </SHeader>
  );
};

const SHeader = styled.header`
  position: relative;
  height: min(80vh, 800px);
  margin-bottom: 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: hsla(0, 0%, 0%, 0.5);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }

  & > h1 {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    font-size: clamp(32px, 3vw, 40px);
    text-align: center;
    font-weight: 750;
    padding: 1em 15px;
  }

  .header__contents {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
  }
`;

export default Header;
