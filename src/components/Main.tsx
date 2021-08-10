import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { errorMessage } from '../stores/errorMessage';
import { undefinedState } from '../stores/undefined';
import { weatherState } from '../stores/weather';
import WeatherCard from './Card/WeatherCard';

const Main = () => {
  const fetchData = useRecoilValue(weatherState);
  const isUndefined = useRecoilValue(undefinedState);
  const ErrorMessage = useRecoilValue(errorMessage);

  return (
    <SMain>
      {isUndefined ? (
        <p className="error-message">{ErrorMessage}</p>
      ) : (
        <>
          <h2>{`${fetchData.city.country}, ${fetchData.city.name}`}</h2>
          <SWeatherList>
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
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  padding: 0 15px;

  & > h2 {
    font-size: clamp(24px, 3vw, 32px);
    margin-bottom: 0.5em;
    text-align: center;
    font-weight: 750;
  }

  & > .error-message {
    text-align: center;
    color: #f07878;
    font-size: clamp(12px, 2vw, 18px);
    font-weight: 750;
  }
`;

const SWeatherList = styled.ul`
  border-bottom: 1px solid #979797;
`;

export default Main;
