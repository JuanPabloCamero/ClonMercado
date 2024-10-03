import React, { createContext, useReducer } from 'react';

export const FavoritesContext = createContext();

export const initialFavoritesState = {
  favoriteItems: [],
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialFavoritesState);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};