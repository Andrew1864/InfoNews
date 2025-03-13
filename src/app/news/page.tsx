"use client";

import { useEffect, useState } from "react";
import NewsCard from "@/components/ui/Card/Card";
import getNews from "@/services/Api/News/NewsApi";
import { Container, Typography } from "@mui/material";
import PaginationControl from "@/components/ui/Pagination/PaginationControl";

interface NewsArticle {
  title: string;
  description: string | null;
  urlToImage: string | null;
}

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    let isMounted = true; // Флаг, чтобы избежать утечек памяти

    async function fetchNews() {
      setLoading(true);
      try {
        const data = await getNews(
          currentPage,
          pageSize,
          "technology",
          "popularity"
        );

        console.log(`📰 Данные для страницы ${currentPage}:`, data);

        if (isMounted) {
          setArticles(data.articles);
          setTotalPages(Math.max(1, Math.ceil(data.totalResults / pageSize)));
        }
      } catch (error) {
        console.error("❌ Ошибка загрузки новостей:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchNews();

    return () => {
      isMounted = false; // Очищаем флаг при размонтировании
    };
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    console.log(`📄 Переход на страницу ${page}`);
    setCurrentPage(page);
  };

  return (
    <section id="news">
      <Container>
        <Typography className="text-center" variant="h4" gutterBottom>
          Новости
        </Typography>
        {loading ? (
          <Typography>Загрузка...</Typography>
        ) : articles.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {articles.map((article, index) => (
              <NewsCard
                key={index}
                id={index}
                title={article.title}
                description={article.description}
                image={article.urlToImage}
              />
            ))}
          </div>
        ) : (
          <Typography>Новости не найдены.</Typography>
        )}
        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Container>
    </section>
  );
}
