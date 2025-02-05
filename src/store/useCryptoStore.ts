import { create } from 'zustand';

interface CryptoStore {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const useCryptoStore = create<CryptoStore>((set) => ({
  favorites: [],
  addFavorite: (id) => set((state) => ({ favorites: [...state.favorites, id] })),
  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((fav) => fav !== id) })),
}));