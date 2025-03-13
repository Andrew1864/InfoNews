"use client";

import { useEffect, useState } from "react";
import NewsCard from "@/components/ui/Card/Card";
import { getNews } from "@/services/Api/News/NewsApi";
import { Container, Typography } from "@mui/material";

interface NewsArticle {
  title: string;
  description: string | null;
  urlToImage: string | null;
}

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNews();
          console.log("Полученные данные API:", data);  // Выводим полученные данные
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Ошибка загрузки новостей:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <section id="news">
      <Container>
        <Typography variant="h4" gutterBottom>
          Новости
        </Typography>
        {loading ? (
          <Typography>Загрузка...</Typography>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <NewsCard
                  key={index}
                  id={index}
                  title={article.title}
                  description={article.description}
                  image={article.urlToImage}
                />
              ))
            ) : (
              <Typography>Новости не найдены.</Typography>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
