import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { errorMessage } from '../../stores/errorMessage';
import { loadingState } from '../../stores/loading';
import { cityNameQuery } from '../../stores/cityName';
import { undefinedState } from '../../stores/undefined';
import { weatherState } from '../../stores/weather';

import { baseWeatherType } from '../../types/baseWeatherType';

import { BaseButton } from '../Button/BaseButton';

const SearchBar = () => {
  const [textValue, setTextValue] = useState('');

  const setLocationQuery = useSetRecoilState(cityNameQuery);

  const API_KEY = process.env.REACT_APP_API_KEY!;

  const cityName = useRecoilValue(cityNameQuery);
  const setErrorMessage = useSetRecoilState(errorMessage);
  const setIsUndefined = useSetRecoilState(undefinedState);
  const setIsLoading = useSetRecoilState(loadingState);
  const setFetchData = useSetRecoilState(weatherState);
  const resetFetchData = useResetRecoilState(weatherState);

  useEffect(() => {
    const fetchWeatherByCityName = async (cityName: string) => {
      if (cityName === '') {
        return false;
      } else {
        setIsLoading(true);

        await axios
          .get<baseWeatherType>(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
              q: cityName,
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
      }
    };

    fetchWeatherByCityName(cityName);
  }, [API_KEY, cityName, resetFetchData, setErrorMessage, setFetchData, setIsLoading, setIsUndefined]);

  const getWeatherByCoords = () => {
    const _logic = (lat: number, lon: number) => {
      setIsLoading(true);

      axios
        .get<baseWeatherType>(`https://api.openweathermap.org/data/2.5/forecast`, {
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
    };

    if (!navigator.geolocation) {
      setErrorMessage('お使いのブラウザでは位置情報を取得するための機能がサポートされていません！');
      return false;
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        _logic(lat, lon);
      });
    }
  };

  return (
    <SForm
      onSubmit={(e) => {
        e.preventDefault();
        setLocationQuery(textValue);
      }}
    >
      <SInput type="text" placeholder="ローマ字で都市名を入力してね" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
      <PrimaryButton
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setLocationQuery(textValue);
        }}
      >
        検索
      </PrimaryButton>
      <SecondaryButton onClick={getWeatherByCoords}>現在地から検索</SecondaryButton>
    </SForm>
  );
};

const SForm = styled.form`
  width: min(100%, 900px);
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 0.5em;

  @media (max-width: 630px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const SInput = styled.input`
  background-color: #dbdbdb;
  flex: 1;
  padding: 1em 2em;
  border-radius: 999px;
`;

const PrimaryButton = styled(BaseButton)`
  background-color: #57db83;
`;

const SecondaryButton = styled(BaseButton)`
  background-color: #5764db;
`;

export default SearchBar;
