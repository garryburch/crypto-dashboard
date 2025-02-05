import axios from "axios";
import { Crypto } from "../types/crypto";

const API_URL = "/api/crypto";

export const fetchCryptoData = async (): Promise<Crypto[]> => {
  const response = await axios.get(API_URL);
  
  return response.data.map((crypto: Crypto) => ({
    ...crypto,
    image: crypto.image,
  }));
};