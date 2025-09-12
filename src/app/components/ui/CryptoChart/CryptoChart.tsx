import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

interface Props {
  id: string;
}

export default function CryptoChart({ id }: Props) {
  const [chartData, setChartData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(
          `https://api.coinlore.net/api/ticker/?id=${id}`
        );
        const data = await response.json();

        const prices = Array.from(
          { length: 7 },
          () => parseFloat(data[0].price_usd) * (1 + (Math.random() - 0.5) / 10)
        );

        const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
        setChartData(prices);
        setLabels(days);
      } catch (error) {
        console.error("Ошибка загрузки графика", error);
      } finally {
        setLoading(false);
      }
    };
    fetchChartData();
  }, [id]);

  if (loading) return <p>Загрузка графика...</p>;

  return (
    <div className="w-full h-64">
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "Цена (USD)",
              data: chartData,
              borderColor: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.2)",
              tension: 0.4,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
