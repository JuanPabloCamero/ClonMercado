import React, { createContext, useReducer } from 'react';

const initialState = {
  profiles: [
    {
      firstName: 'Juan Pablo',
      lastName: 'Camero',
      dateOfBirth: '19/08/2004',
      photo: require('../assets/fotoPerfil.png'),
    },
  ],
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      return { ...state, profiles: [...state.profiles, action.payload] };
    case 'DELETE_PROFILE':
      return {
        ...state,
        profiles: state.profiles.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};