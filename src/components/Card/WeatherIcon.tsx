import { RiCloudyLine, RiSunLine, RiThunderstormsLine, RiDrizzleLine, RiRainyLine, RiSnowyLine, RiMistLine } from 'react-icons/ri';

interface IWeatherIconProps {
  icon: string;
}

const WeatherIcon = (props: IWeatherIconProps) => {
  const distinctIcon = (icon: string) => {
    if (icon === 'Thunderstorm') return <RiThunderstormsLine color="#f7eb50" />;
    if (icon === 'Drizzle') return <RiDrizzleLine color="#93d4ff" />;
    if (icon === 'Rain') return <RiRainyLine color="#3189c4" />;
    if (icon === 'Snow') return <RiSnowyLine color="#b0f2fd" />;
    if (icon === 'Atmosphere') return <RiMistLine color="#7c7c7c" />;
    if (icon === 'Clear') return <RiSunLine color="#c47331" />;
    if (icon === 'Clouds') return <RiCloudyLine color="#7c7c7c" />;
  };
  return <>{distinctIcon(props.icon)}</>;
};

export default WeatherIcon;
