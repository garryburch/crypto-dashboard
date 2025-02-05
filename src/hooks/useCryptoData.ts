import { fetchCryptoData } from "@/utils/fetchCryptoData";
import { useQuery } from "@tanstack/react-query";

export const useCryptoData = () => {
  return useQuery({
    queryKey: ["cryptoData"],
    queryFn: fetchCryptoData,
    refetchInterval: 60000,
    staleTime: 120000,
  });
};