import { create } from "zustand";

interface FavoritesState {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const useFavorites = create<FavoritesState>((set) => ({
  favorites: [],
  addFavorite: (id) => set((state) => ({ favorites: [...state.favorites, id] })),
  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((fav) => fav !== id) })),
}));