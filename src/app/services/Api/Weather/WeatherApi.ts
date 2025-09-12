
async function FetchWeather(city: string) {
    const apiKey = "N2D4TUYFK3ZEJG6G6UQMDS9CV"; 
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
      city
    )}?unitGroup=metric&key=${apiKey}&contentType=json`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      return await response.json();
    } catch (error) {
      console.error("Ошибка при получении погоды:", error);
      throw error;
    }
  }
  
  export { FetchWeather };
  