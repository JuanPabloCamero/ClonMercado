import React, { createContext, useReducer, useContext } from 'react';
import { AuthContext } from './AuthContext';

const initialState = {
  profile: null,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { state: authState } = useContext(AuthContext);
  const [state, dispatch] = useReducer(profileReducer, initialState);

  React.useEffect(() => {
    if (authState.isAuthenticated && authState.user) {
      const { usuario, correo, fechaNacimiento } = authState.user;
      dispatch({
        type: 'SET_PROFILE',
        payload: {
          usuario,
          correo,
          fechaNacimiento,
        },
      });
    }
  }, [authState]);

  return (
    <ProfileContext.Provider value={{ state }}>
      {children}
    </ProfileContext.Provider>
  );
};