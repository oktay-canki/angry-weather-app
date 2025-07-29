import Image from "next/image";

const OpenWeatherIcon = ({
  iconCode,
  description,
  width = 80,
  height = 80,
}: {
  iconCode: string;
  description: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt={description}
      width={width}
      height={height}
    />
  );
};

export default OpenWeatherIcon;
