export type baseWeatherType = {
  cod: number;
  city: {
    country: string;
    name: string;
  };
  list: [
    {
      dt: number;
      dt_txt: string;
      main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      wind: {
        speed: number;
        deg: number;
      };
    }
  ];
};
