import axios from 'axios';
import { FormEvent } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import Mainvisual from '../assets/img/mainvisual.jpg';
import { errorMessage } from '../stores/errorMessage';
import { inputState } from '../stores/inputState';
import { loadingState } from '../stores/loading';
import { undefinedState } from '../stores/undefined';
import { weatherState } from '../stores/weather';
import { weatherInfo } from '../types/weatherInfo';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
  const API_KEY = process.env.REACT_APP_API_KEY!;

  const inputValue = useRecoilValue(inputState);
  const setErrorMessage = useSetRecoilState(errorMessage);
  const setIsUndefined = useSetRecoilState(undefinedState);
  const setIsLoading = useSetRecoilState(loadingState);
  const setFetchData = useSetRecoilState(weatherState);
  const resetFetchData = useResetRecoilState(weatherState);

  const fetchApi = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue === '') {
      setErrorMessage('検索欄が空だよ！: 404 Not Found');
      return false;
    } else {
      setIsLoading(true);

      setTimeout(() => {
        axios
          .get<weatherInfo>(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
              q: inputValue,
              units: 'metric',
              lang: 'ja',
              appid: API_KEY,
            },
          })
          .then((res) => {
            const getApiData = res.data;
            if (getApiData.cod) setIsUndefined(false);
            setFetchData(getApiData);
          })
          .catch((e) => {
            console.log(e);
            resetFetchData();
            setIsUndefined(true);
            setErrorMessage('検索上限に達したか、もしくはお探しの都市の情報がなかったよ');
            return false;
          })
          .finally(() => setIsLoading(false));
      }, 1000);
    }
  };

  const getLocation = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCoords(lat, lon);
    });
  };

  const getWeatherByCoords = (lat: number, lon: number) => {
    setIsLoading(true);

    setTimeout(() => {
      axios
        .get<weatherInfo>(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            lat: lat,
            lon: lon,
            units: 'metric',
            lang: 'ja',
            appid: API_KEY,
          },
        })
        .then((res) => {
          setIsUndefined(false);
          const getApiData = res.data;
          setFetchData(getApiData);
        })
        .catch((e) => {
          console.error(e);
          resetFetchData();
          setIsUndefined(true);
          setErrorMessage('検索上限に達したか、もしくはお探しの都市の情報がなかったよ');
          return false;
        })
        .finally(() => setIsLoading(false));
    }, 1000);
  };

  return (
    <SHeader>
      <h1>3 Hours Weather Forecast</h1>
      <img src={Mainvisual} alt="" />
      <div className="header__contents">
        <SearchBar onClick1={fetchApi} onClick2={getLocation} />
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
