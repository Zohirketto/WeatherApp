import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetch_weather } from "../features/WeatherSlice";
import Card from "./WeatherCard";
import { Link } from "react-router-dom";

export default function Weather() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!city.trim()) return alert("Please enter a valid city name.");
    dispatch(fetch_weather(city));
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen text-white">
      <h1 className="text-3xl font-bold">Weather Finder</h1>

      <div className="flex space-x-3">
        <input
          type="text"
          value={city}
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
          className="w-64 px-4 py-2 border rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Search
        </button>
      </div>

      <Link
        to="/"
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
      >
        Back to Home
      </Link>
      <Card />
    </div>
  );
}
