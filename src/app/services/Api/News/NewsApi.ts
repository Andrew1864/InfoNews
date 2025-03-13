async function getNews(
  page: number = 1,
  pageSize: number = 9,
  query: string = "technology",
  sortBy: string = "publishedAt"
) {
  const apiKey = "6904b03c346442b890b08010da2d12da";
  const url = new URL("https://newsapi.org/v2/everything");

  const params = {
    q: query,
    sortBy: "publishedAt",
    apiKey: apiKey,
    page: page.toString(),
    pageSize: pageSize.toString(),
    language: "en", // Ограничиваем до английских новостей
  };

  url.search = new URLSearchParams(params).toString();

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    const data = await response.json();

    console.log("Полученные данные API:", data);

    if (!data.articles || data.articles.length === 0) {
      console.warn("Новости не найдены. Попробуйте другой запрос.");
      return { articles: [], totalResults: 0 };
    }

    return data;
  } catch (error) {
    console.error("Ошибка при получении новостей:", error);
    throw error;
  }
}

export default getNews;
