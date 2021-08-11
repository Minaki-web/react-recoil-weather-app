import { SiReact, SiTypescript, SiStyledComponents } from 'react-icons/si';
import styled from 'styled-components';

import RecoilSvg from '../assets/img/RecoilSvg';

const Footer = () => {
  return (
    <SFooter>
      <div className="inner">
        <div className="dev-env">
          <SiTypescript />
          <SiReact />
          <SiStyledComponents />
          <RecoilSvg />
        </div>
        <div className="copyright">
          <small>&copy; 2021 Minaki</small>
        </div>
      </div>
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: #b9b9b9;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .dev-env {
    display: flex;
    gap: 20px;
    & > * {
      height: 30px;
      min-width: 30px;
    }
  }

  .copyright {
    margin-top: 1em;
    text-align: center;

    small {
      font-size: 13px;
    }
  }
`;

export default Footer;
