import { useSelector } from "react-redux";

export default function Card() {
  const { Data, loading, error } = useSelector((state) => state.weather);

  if (loading) {
    return <p className="text-center text-xl font-bold text-blue-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl font-bold text-red-500">Error: {error}</p>;
  }

  if (!Data || !Data.main || !Data.weather || !Data.wind) {
    return <p className="text-center text-xl font-bold text-gray-500">Enter a city to see weather details.</p>;
  }

  // Determine if the weather is "rain". Note that Data.weather is an array so we check the first element.
  const isRain = Data.weather[0]?.main.toLowerCase() === "rain";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <WeatherCard
        title="Weather"
        value={Data.weather[0]?.main || "N/A"}
        // If it's rain, add a blue background; otherwise use the default styling.
        additionalClasses={isRain ? "bg-blue-500" : "bg-white bg-opacity-80"}
      />
      <WeatherCard title="Temperature" value={`${Data.main.temp}°C`} />
      <WeatherCard title="Humidity" value={`${Data.main.humidity}%`} />
      <WeatherCard title="Sea Level" value={`${Data.main.sea_level || "N/A"}m`} />
      <WeatherCard title="Pressure" value={`${Data.main.pressure} hPa`} />
      <WeatherCard title="Wind Speed" value={`${Data.wind.speed} m/s`} />
      <WeatherCard title="Visibility" value={`${Data.visibility || "N/A"}m`} />
      <WeatherCard title="Feels Like" value={`${Data.main.feels_like}°C`} />
      <WeatherCard title="Min/Max Temp" value={`${Data.main.temp_min}°C / ${Data.main.temp_max}°C`} />
    </div>
  );
}

const WeatherCard = ({ title, value, additionalClasses }) => (
  <div
    // Apply the additionalClasses if provided; otherwise, default to the standard card background.
    className={`${additionalClasses ? additionalClasses : "bg-white bg-opacity-80"} backdrop-blur-lg p-6 rounded-xl shadow-xl flex flex-col items-center`}
  >
    <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
    <p className="text-lg text-gray-600">{value}</p>
  </div>
);
