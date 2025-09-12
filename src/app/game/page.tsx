"use client";

import GameBoard from "@/components/ui/GameBoard/GameBoard";

export default function Games() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-orange-300 to-blue-200 font-sans">
      <div className="text-white text-3xl font-semibold mb-4">Game</div>
      <div className="flex gap-4 mb-4">
      
      </div>
      <GameBoard />
    </div>
  );
}
