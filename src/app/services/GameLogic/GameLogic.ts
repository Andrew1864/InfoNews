export const EMOJIS = ["🥑", "🍇", "🍒", "🌽", "🥕", "🍉", "🥔", "🍌"];

export const generateCards = () => {
  const emojiPairs = [...EMOJIS, ...EMOJIS]; // Дублируем массив
  return shuffleArray(emojiPairs).map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false, // Перевернута ли карточка
    isMatched: false, // Найдена ли пара
  }));
};

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};
