# 🪙 Crypto Dashboard

A modern, responsive cryptocurrency dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **CoinGecko's API**.  

Search, sort, and favorite top coins with blazing-fast performance and zero bloat.

---

## 🚀 Features

- 🔍 **Search Filtering** – Instantly filter by coin name.
- ↕️ **Dynamic Sorting** – Sort by name, price, or market cap.
- ⭐️ **Favorites** – Add/remove favorites, saved to localStorage.
- 📲 **Mobile-First UI** – Fully responsive with Tailwind.
- ⚡ **Optimized Images** – Uses `next/image` for best-in-class image performance.
- 🔁 **Live Refreshing** – Coin data auto-refreshes every 5 seconds.
- 🧩 **Clean Architecture** – Modular codebase with reusable components, hooks, and utils.
- 🛡️ **API Proxy Layer** – Avoids CORS limits using Next.js API routes.

---

## 🛠️ Stack

- [Next.js 15 (App Router + Turbopack)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest) (via `@tanstack/react-query`)
- [Zustand](https://zustand-demo.pmnd.rs/) for simple state
- [CoinGecko API](https://www.coingecko.com/en/api)

---

## 🧪 Getting Started

```bash
git clone https://github.com/your-username/crypto-dashboard.git
cd crypto-dashboard
npm install
npm run dev