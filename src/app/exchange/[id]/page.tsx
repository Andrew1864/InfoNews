"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { CryptoData } from "@/services/Api/Cryptocurrency/CryptocurrencyApi";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ExchangeDetails() {
  const { id } = useParams();
  const [crypto, setCrypto] = useState<CryptoData | null>(null);
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchCryptoDetails = async () => {
      try {
        const response = await fetch(
          `https://api.coinlore.net/api/ticker/?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        const data = await response.json();
        setCrypto(data[0]);

        // Генерируем фейковую историю цен (API CoinLore её не даёт)
        const fakeHistory = Array.from({ length: 10 }, () =>
          parseFloat(
            (
              parseFloat(data[0].price_usd) *
              (0.95 + Math.random() * 0.1)
            ).toFixed(2)
          )
        );
        setPriceHistory(fakeHistory);
      } catch (err) {
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoDetails();
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!crypto) return <p>Данные не найдены</p>;

  // Данные для графика
  const chartData = {
    labels: [
      "10 мин",
      "9 мин",
      "8 мин",
      "7 мин",
      "6 мин",
      "5 мин",
      "4 мин",
      "3 мин",
      "2 мин",
      "1 мин",
    ],
    datasets: [
      {
        label: `Цена ${crypto.symbol} (USD)`,
        data: priceHistory,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  return (
    <section className="flex flex-wrap justify-center gap-4">
      <div className="md:w-[60%] mb-3 mt-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg p-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          {crypto.name} ({crypto.symbol})
        </h1>

        <div className="flex gap-3 justify-center mt-4">
          <p className="text-3xl font-extrabold text-gray-900 dark:text-white">
            ${crypto.price_usd}
          </p>
          <p
            className={`text-lg font-semibold ${
              parseFloat(crypto.percent_change_24h) >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {crypto.percent_change_24h}%
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
            История цены за последние 10 минут
          </h2>
          <Line data={chartData} />
        </div>
      </div>
    </section>
  );
}
