import React, { createContext, useReducer } from 'react';

const initialState = {
  questions: {},
  comments: {},
};

const QuestionsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.payload.productId]: [
            ...(state.questions[action.payload.productId] || []),
            action.payload.question,
          ],
        },
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.productId]: [
            ...(state.comments[action.payload.productId] || []),
            action.payload.comment,
          ],
        },
      };
    default:
      return state;
  }
};

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QuestionsReducer, initialState);
  return (
    <QuestionsContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionsContext.Provider>
  );
};