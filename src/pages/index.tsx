import React, { useState } from "react";
import CryptoList from "../components/CryptoList";
import FavoriteList from "../components/FavoriteList";
import SearchBar from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Crypto Dashboard</h1>
        <ThemeToggle />
      </div>

      <SearchBar onSearch={setSearchQuery} />
      <FavoriteList />
      <CryptoList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;