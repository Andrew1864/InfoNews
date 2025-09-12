"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Table from "@/components/ui/Table/Table";
import {
  fetchCryptos,
  CryptoData,
} from "@/services/Api/Cryptocurrency/CryptocurrencyApi";

export default function Exchange() {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCryptos(10);
        setCryptos(data);
      } catch (err) {
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <section className="flex flex-wrap justify-center gap-4">
        <div className="md:w-[60%] mb-3 mt-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg p-4">
          <h1 className="text-lg text-center font-semibold text-gray-800 dark:text-white mb-4">
            Таблица криптовалют
          </h1>

          {loading && (
            <p className="text-gray-600 dark:text-gray-400">Загрузка...</p>
          )}
          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && (
            <Table
              headers={[
                { key: "rank", title: "Ранг" },
                { key: "name", title: "Название" },
                { key: "symbol", title: "Символ" },
                { key: "price_usd", title: "Цена (USD)" },
              ]}
              data={cryptos.map((crypto) => ({
                rank: crypto.rank,
                name: (
                  <Link
                    href={`/exchange/${crypto.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {crypto.name}
                  </Link>
                ),
                symbol: crypto.symbol,
                price_usd: `$${crypto.price_usd}`,
              }))}
            />
          )}
        </div>
        <div className="md:w-[20%]">
          <h1>Exchange2</h1>
        </div>
      </section>
    </>
  );
}
