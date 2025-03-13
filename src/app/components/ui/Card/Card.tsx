import React, { useState } from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface NewsCardProps {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
}

export default function NewsCard({ id, title, description, image }: NewsCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);  // Если картинка не может быть загружена, устанавливаем состояние ошибки
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/news/${id}`} passHref>
        <CardActionArea>
          {!imageError && image && (
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={title}
              onError={handleImageError} // Обработчик ошибки при загрузке изображения
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description || "Описание отсутствует"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
