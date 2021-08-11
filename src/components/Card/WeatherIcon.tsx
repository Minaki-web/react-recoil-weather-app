import { RiCloudyLine, RiSunLine, RiThunderstormsLine, RiDrizzleLine, RiRainyLine, RiSnowyLine, RiMistLine } from 'react-icons/ri';

interface IWeatherIconProps {
  icon: string;
}

const WeatherIcon = (props: IWeatherIconProps) => {
  if (props.icon === 'Thunderstorm') return <RiThunderstormsLine color="#f7eb50" />;
  if (props.icon === 'Drizzle') return <RiDrizzleLine color="#93d4ff" />;
  if (props.icon === 'Rain') return <RiRainyLine color="#3189c4" />;
  if (props.icon === 'Snow') return <RiSnowyLine color="#b0f2fd" />;
  if (props.icon === 'Atmosphere') return <RiMistLine color="#7c7c7c" />;
  if (props.icon === 'Clear') return <RiSunLine color="#c47331" />;
  if (props.icon === 'Clouds') return <RiCloudyLine color="#7c7c7c" />;
  return <></>;
};

export default WeatherIcon;
