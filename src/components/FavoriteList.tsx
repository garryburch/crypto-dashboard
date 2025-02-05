import React from "react";
import Image from "next/image";
import { useFavorites } from "../hooks/useFavorites";
import { useCryptoData } from "../hooks/useCryptoData";
import { Crypto } from "../types/crypto";

const FavoriteList = () => {
  const { favorites, removeFavorite } = useFavorites();
  const { data, isLoading } = useCryptoData();

  const favoriteCryptos = data?.filter((crypto: Crypto) => favorites.includes(crypto.id)) || [];

  return (
    <div className="mt-4 mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Favorites</h2>

      {isLoading ? (
        <p className="text-gray-500">Loading favorites...</p>
      ) : favoriteCryptos.length === 0 ? (
        <p className="text-gray-500">No favorites selected.</p>
      ) : (
        <ul className="space-y-2">
          {favoriteCryptos.map((crypto: Crypto) => (
            <li
              key={crypto.id}
              className="flex justify-between items-center p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8">
                  <Image
                    src={crypto.image}
                    alt={crypto.name}
                    fill
                    sizes="(max-width: 768px) 40px, (max-width: 1200px) 50px, 60px"
                    className="rounded-full object-contain"
                  />
                </div>

                <p className="text-gray-900 dark:text-white">
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </p>
              </div>

              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeFavorite(crypto.id)}
              >
                Remove ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteList;