interface IWeatherIconProps {
  icon: string;
  description: string;
}

const WeatherIcon = (props: IWeatherIconProps) => {
  const url = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  return <img src={url} alt={props.description} />;
};

export default WeatherIcon;
