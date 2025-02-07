import React, { useState } from "react";
import { useCryptoData } from "../hooks/useCryptoData";
import CryptoCard from "./CryptoCard";
import { Crypto } from "../types/crypto";
import { sortCryptos } from "../utils/sort";

interface CryptoListProps {
  searchQuery: string;
}

const CryptoList: React.FC<CryptoListProps> = ({ searchQuery }) => {
  const { data, isLoading } = useCryptoData();
  const [sortBy, setSortBy] = useState<string>("market_cap_desc");

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;

  const filteredCryptos = (data as Crypto[] || []).filter((crypto) =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCryptos = sortCryptos(filteredCryptos, sortBy);

  return (
    <div className="w-full">
      <div className="flex justify-end mb-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
        >
          <option value="market_cap_desc">Market Cap: High to Low</option>
          <option value="market_cap_asc">Market Cap: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="name_asc">Name: A-Z</option>
          <option value="name_desc">Name: Z-A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {sortedCryptos.length > 0 ? (
          sortedCryptos.map((crypto) => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))
        ) : (
          <p className="text-gray-500">No matching cryptocurrencies found.</p>
        )}
      </div>
    </div>
  );
};

export default CryptoList;