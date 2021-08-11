import { memo } from 'react';
import { RiWindyLine, RiLoginCircleLine, RiTempHotLine, RiDropLine } from 'react-icons/ri';
import styled from 'styled-components';

import { IWeatherDataProps } from '../../types/IWeatherData';
import WeatherIcon from './WeatherIcon';

const WeatherCard = memo((props: IWeatherDataProps) => {
  return (
    <SCard>
      <SWeatherIcon>
        <WeatherIcon icon={props.weather[0].main} />
      </SWeatherIcon>
      <SWeatherDesc>
        <div className="inner">
          <h3 className="meta">
            <p>{props.weather[0].description}</p>
          </h3>
          <div className="meta">
            <p>
              <RiTempHotLine />
              {props.main.temp} &deg;
            </p>
            <span>/</span>
            <p>
              <RiDropLine />
              {props.main.humidity} &#37;
            </p>
          </div>
          <div className="meta">
            <p>
              <RiWindyLine />
              {props.wind.speed} m/s
            </p>
            <span>/</span>
            <p>
              <RiLoginCircleLine />
              {props.main.pressure} hPa
            </p>
          </div>
          <p className="timestamp">{props.dt_txt}</p>
        </div>
      </SWeatherDesc>
    </SCard>
  );
});

const SCard = styled.li`
  border-top: 1px solid #979797;
  border-left: 1px solid #979797;
  border-right: 1px solid #979797;
  display: flex;
`;

const SWeatherIcon = styled.div`
  padding: clamp(20px, 5vw, 60px);
  border-right: 1px solid #979797;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;

  svg {
    width: 50px;
    height: 50px;
  }
`;

const SWeatherDesc = styled.div`
  --baseBlank: 15px;

  width: 100%;
  padding: var(--baseBlank);
  display: flex;
  justify-content: center;
  align-items: center;

  & > .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: clamp(14px, 2vw, 20px);

    & > .meta {
      display: flex;
      gap: 0.25em;
      align-items: center;
      margin-bottom: 0.5em;

      & svg {
        vertical-align: bottom;
      }
    }

    & h3 {
      font-size: clamp(24px, 4vw, 30px);
      line-height: 1;
    }
  }

  & .timestamp {
    color: #b6b6b6;
    font-size: clamp(12px, 2vw, 15px);
    text-align: center;
    border-top: 1px solid;
    margin-top: var(--baseBlank);
    padding-top: var(--baseBlank);
  }
`;

export default WeatherCard;
