import { useEffect, useState } from "react";
import { generateCards } from "@/services/GameLogic/GameLogic";

const GameBoard = () => {
  const [cards, setCards] = useState(generateCards());
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [history, setHistory] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false); // 🔹 Добавляем состояние для проверки клиента

  // 🔹 Проверяем, что мы на клиенте
  useEffect(() => {
    setIsClient(true);
    const savedHistory = localStorage.getItem("gameHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleCardClick = (index: number) => {
    if (selectedCards.length === 2 || cards[index].isFlipped) return;

    if (!isGameRunning) {
      setIsGameRunning(true);
    }

    const newCards = cards.map((card, i) =>
      i === index ? { ...card, isFlipped: true } : card
    );

    setCards(newCards);
    setSelectedCards([...selectedCards, index]);
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;
      if (cards[first].emoji === cards[second].emoji) {
        setCards((prev) =>
          prev.map((card, i) =>
            i === first || i === second ? { ...card, isMatched: true } : card
          )
        );
        setMatchedPairs((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, i) =>
              i === first || i === second ? { ...card, isFlipped: false } : card
            )
          );
        }, 1000);
      }
      setSelectedCards([]);
    }
  }, [selectedCards, cards]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGameRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isGameRunning]);

  useEffect(() => {
    if (matchedPairs === cards.length / 2 && isGameRunning) {
      const newHistory = [...history, time];
      setHistory(newHistory);
      localStorage.setItem("gameHistory", JSON.stringify(newHistory));
      setIsGameRunning(false);
    }
  }, [matchedPairs]);

  const resetGame = () => {
    setCards(generateCards());
    setSelectedCards([]);
    setMatchedPairs(0);
    setTime(0);
    setIsGameRunning(false);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("gameHistory");
  };

  return (
    <div className="flex justify-center items-start gap-10">
      <div className="flex flex-col items-center">
        <div className="text-white text-lg mb-2">⏳ Время: {time} сек.</div>

        <button
          className="bg-gray-600 text-white rounded px-6 py-2 text-lg hover:bg-gray-700 mb-4"
          onClick={resetGame}
        >
          Начать заново
        </button>

        <div className="grid grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`relative w-24 h-24 rounded shadow-md flex items-center justify-center cursor-pointer transition-transform duration-500 ${
                card.isFlipped || card.isMatched ? "bg-white" : "bg-gray-600"
              }`}
              onClick={() => handleCardClick(index)}
            >
              {card.isFlipped || card.isMatched ? card.emoji : "❓"}
            </div>
          ))}
        </div>

        {matchedPairs === cards.length / 2 && (
          <div className="mt-4 text-white text-xl font-bold">
            🎉 Ты выиграл за {time} секунд! 🎉
          </div>
        )}
      </div>

      {/* 🔹 Показываем историю только если клиент отрендерен */}
      {isClient && (
        <div className="w-60 p-4 bg-gray-800 rounded-md text-white">
          <h2 className="text-lg font-bold mb-2">🏆 История побед:</h2>
          {history.length === 0 ? (
            <p className="text-gray-400">Пока нет побед...</p>
          ) : (
            <ul className="mb-3">
              {history.map((t, i) => (
                <li key={i} className="py-1 border-b border-gray-700">
                  🕒 {t} сек.
                </li>
              ))}
            </ul>
          )}
          <button
            className="bg-red-600 text-white rounded px-4 py-2 text-sm hover:bg-red-700 w-full"
            onClick={clearHistory}
          >
            Очистить статистику
          </button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
