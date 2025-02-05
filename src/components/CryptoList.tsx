import React from "react";
import { useCryptoData } from "../hooks/useCryptoData";
import CryptoCard from "./CryptoCard";
import { Crypto } from "../types/crypto";

interface CryptoListProps {
  searchQuery: string;
}

const CryptoList: React.FC<CryptoListProps> = ({ searchQuery }) => {
  const { data, isLoading } = useCryptoData();

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  
  const filteredCryptos = (data as Crypto[] || []).filter((crypto) =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log("🚀 ~ filteredCryptos:", filteredCryptos)

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCryptos.length > 0 ? (
        filteredCryptos.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))
      ) : (
        <p className="text-gray-500">No matching cryptocurrencies found.</p>
      )}
    </div>
  );
};

export default CryptoList;