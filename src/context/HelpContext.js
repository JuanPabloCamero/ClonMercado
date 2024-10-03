import React, { createContext, useReducer } from 'react';

export const HelpContext = createContext();

const initialState = {
  requestType: '',
  description: ''
};

const HelpReducer = (state, action) => {
  switch (action.type) {
    case 'SET_REQUEST_TYPE':
      return { ...state, requestType: action.payload };
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export const HelpProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HelpReducer, initialState);

  return (
    <HelpContext.Provider value={{ state, dispatch }}>
      {children}
    </HelpContext.Provider>
  );
};