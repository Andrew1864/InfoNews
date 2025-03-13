import Link from "next/link";
import { notFound } from "next/navigation";
import { getNews } from "@/services/Api/News/NewsApi";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, Typography, CardMedia } from "@mui/material";

interface NewsArticle {
  title: string;
  description: string | null;
  urlToImage: string | null;
  content: string | null;
}

export default async function NewsDetails({
  params,
}: {
  params: { id: string };
}) {
  const data = await getNews();
  const article = data.articles?.[+params.id]; // Исправлено (было data.article)

  if (!article) {
    return notFound();
  }

  return (
    <>
      <Container>
      <Link href="/news">
        <ArrowBackIcon className="relative right-10 top-2" />
      </Link>
        <Typography variant="h3">{article.title}</Typography>
        {article.urlToImage && (
          <CardMedia
            component="img"
            height="300"
            image={article.urlToImage}
            alt={article.title}
          />
        )}
        <Typography variant="body1">{article.description}</Typography>
        <Typography variant="body2">
          {article.content || "Нет дополнительной информации."}
        </Typography>
      </Container>
    </>
  );
}
