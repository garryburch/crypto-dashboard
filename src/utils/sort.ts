import { Crypto } from "../types/crypto";

export const sortCryptos = (
  cryptos: Crypto[],
  sortBy: string
): Crypto[] => {
  const sortFunctions: Record<string, (a: Crypto, b: Crypto) => number> = {
    price_desc: (a, b) => b.current_price - a.current_price,
    price_asc: (a, b) => a.current_price - b.current_price,
    market_cap_desc: (a, b) => b.market_cap - a.market_cap,
    market_cap_asc: (a, b) => a.market_cap - b.market_cap,
    name_asc: (a, b) => a.name.localeCompare(b.name),
    name_desc: (a, b) => b.name.localeCompare(a.name),
  };

  return [...cryptos].sort(sortFunctions[sortBy]);
};