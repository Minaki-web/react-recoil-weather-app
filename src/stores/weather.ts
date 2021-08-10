import { atom } from 'recoil';
import { weatherInfo } from '../types/weatherInfo';

export const weatherState = atom<weatherInfo>({
  key: 'weatherState',
  default: {
    cod: 0,
    city: {
      country: '',
      name: '',
    },
    list: [
      {
        dt: 0,
        dt_txt: '',
        main: {
          temp: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          humidity: 0,
          temp_kf: 0,
        },
        weather: [
          {
            id: 0,
            main: '',
            description: '',
            icon: '',
          },
        ],
        wind: {
          speed: 0,
          deg: 0,
        },
      },
    ],
  },
});
