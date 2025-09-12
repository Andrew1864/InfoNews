"use client";

import React from "react";
import { Button, Box } from "@mui/material";

interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControl: React.FC<PaginationControlProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <Button
        variant="contained"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Назад
      </Button>
      <Box sx={{ display: "flex", alignItems: "center", margin: "0 10px" }}>
        <span>
          Страница {currentPage} из {totalPages}
        </span>
      </Box>
      <Button
        variant="contained"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Вперёд
      </Button>
    </Box>
  );
};

export default PaginationControl;
