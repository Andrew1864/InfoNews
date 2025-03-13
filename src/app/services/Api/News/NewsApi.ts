// NewsApi.ts
async function getNews(query: string = "music", sortBy: string = "music") {
    const apiKey = "6904b03c346442b890b08010da2d12da";
    const url = new URL("https://newsapi.org/v2/everything");

    const params = {
        q: query,            // Используем переданный параметр запроса
        sortBy: sortBy,      // Используем переданный параметр сортировки
        apiKey: apiKey,
        
    };

    url.search = new URLSearchParams(params).toString();
    

    try {
        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error("Ошибка запроса");
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при получении новостей:", error);
        throw error;
    }
}

export { getNews };
