import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
        sparkline: false,
      },
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching CoinGecko data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}