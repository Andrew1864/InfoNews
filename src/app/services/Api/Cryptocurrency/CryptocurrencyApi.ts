export interface CryptoData  {
id: string;
name: string;
symbol: string;
price_usd: string;
rank: number;
};

export const fetchCryptos = async (limit: number = 10): Promise<CryptoData[]> => {
    try {
        const response = await fetch("https://api.coinlore.net/api/tickers/");
        if (!response.ok) {
            throw new Error("Ошибка при получении данных");
        };
        const data = await response.json();
        return data.data.slice(0, limit);
    } catch (error) {
        console.error("Ошибка", error)
        return [];
    }
};