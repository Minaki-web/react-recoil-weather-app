import Loader from 'react-loader-spinner';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { errorMessage } from '../../stores/errorMessage';
import { loadingState } from '../../stores/loading';
import { undefinedState } from '../../stores/undefined';
import { weatherState } from '../../stores/weather';

import WeatherCard from '../Card/WeatherCard';

const Main = () => {
  const fetchData = useRecoilValue(weatherState);
  const isUndefined = useRecoilValue(undefinedState);
  const isLoading = useRecoilValue(loadingState);
  const ErrorMessage = useRecoilValue(errorMessage);

  return (
    <SMain>
      {isLoading ? (
        <SLoader>
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </SLoader>
      ) : isUndefined ? (
        <p className="error-message">{ErrorMessage}</p>
      ) : (
        <>
          <SWeatherList>
            <h2>{`${fetchData.city.country}, ${fetchData.city.name}`}</h2>
            {fetchData.list.map((piece) => (
              <WeatherCard key={piece.dt} {...piece} />
            ))}
          </SWeatherList>
        </>
      )}
    </SMain>
  );
};

const SMain = styled.main`
  width: min(100%, 900px);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  padding: 0 15px;
  min-height: 53px;

  & > .error-message {
    text-align: center;
    color: #f07878;
    font-size: clamp(12px, 2vw, 18px);
    font-weight: 750;
  }
`;

const SLoader = styled.div`
  & > div {
    width: 50px;
    display: block;
    margin: 0 auto;
  }
`;

const SWeatherList = styled.ul`
  border-bottom: 1px solid #979797;
  transition: all 0.3s;
  animation: fadeIn-up 1s ease forwards;

  & > h2 {
    font-size: clamp(24px, 3vw, 32px);
    margin-bottom: 0.5em;
    text-align: center;
    font-weight: 750;
  }

  @keyframes fadeIn-up {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(none);
    }
  }
`;

export default Main;
