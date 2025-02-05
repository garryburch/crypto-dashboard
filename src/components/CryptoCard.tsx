import React from "react";
import Image from "next/image";
import { useFavorites } from "../hooks/useFavorites";
import { Crypto } from "../types/crypto";

interface CryptoCardProps {
  crypto: Crypto;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.includes(crypto.id);

  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 w-full">
      <div className="flex items-center space-x-4">

      <div className="relative w-10 h-10">
          <Image 
            src={crypto.image} 
            alt={crypto.name} 
            fill
            sizes="(max-width: 768px) 40px, (max-width: 1200px) 50px, 60px" 
            className="rounded-full object-contain"
          />
        </div>


        <div>
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {crypto.name} ({crypto.symbol.toUpperCase()})
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            ${crypto.current_price.toLocaleString()}
          </p>
        </div>
      </div>


      <button
        className={`p-2 text-lg ${isFavorite ? "text-yellow-500" : "text-gray-400"}`}
        onClick={() => (isFavorite ? removeFavorite(crypto.id) : addFavorite(crypto.id))}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </div>
  );
};

export default CryptoCard;