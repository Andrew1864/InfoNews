"use client";

import { useState } from "react";
import Table from "@/components/ui/Table/Table";

interface WeatherData {
  days?: {
    datetime: string;
    temp: number;
    humidity: number;
    conditions: string;
  }[];
}

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    setError(""); // Очистка ошибки перед новым запросом
    setWeatherData(null); // Очистка предыдущих данных

    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
          city
        )}?unitGroup=metric&key=N2D4TUYFK3ZEJG6G6UQMDS9CV&contentType=json`
      );

      if (!response.ok) {
        throw new Error("Ошибка запроса. Проверьте правильность ввода города.");
      }

      const data = await response.json();

      if (!data.days) {
        throw new Error("Данные о погоде не найдены. Попробуйте другой город.");
      }

      setWeatherData(data);
    } catch (err: any) {
      setError(err.message || "Произошла ошибка при загрузке данных.");
    }

    setLoading(false);
  };

  return (
    <section id="weather">
      <div className="container flex items-center flex-col content-center justify-center max-w-7xl mx-auto px-2 mb-3">
        <h2 className="mb-4 text-4xl font-bold text-white">Погода</h2>

        {/* Поле ввода и кнопка */}
        <div className="w-full max-w-sm min-w-[200px] mb-3">
          <div className="relative flex items-center">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-white text-black placeholder:text-gray-500 text-sm border border-slate-200 rounded-md pl-3 pr-3 py-2"
              placeholder="Введите город..."
            />
            <button
              onClick={fetchWeather}
              className="ml-2 rounded-md bg-slate-800 py-2 px-4 text-white hover:bg-slate-700 transition"
            >
              {loading ? "Загрузка..." : "Поиск"}
            </button>
          </div>
        </div>

        {/* Отображение ошибки */}
        {error && (
          <div className="text-red-500 bg-red-100 p-2 rounded-md mt-2">
            {error}
          </div>
        )}

        {/* Отображение данных, если есть погода */}
        {weatherData?.days && (
          <Table
            headers={[
              { key: "datetime", title: "Дата" },
              { key: "temp", title: "Температура (°C)" },
              { key: "humidity", title: "Влажность (%)" },
              { key: "conditions", title: "Условия" },
            ]}
            data={weatherData.days.map((day) => ({
              datetime: day.datetime,
              temp: day.temp,
              humidity: day.humidity,
              conditions: day.conditions,
            }))}
          />
        )}
      </div>
    </section>
  );
}
