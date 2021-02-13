import React, { useContext, createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';
import { useActions } from './actions';

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(dispatch);

  return (
    <MainContext.Provider value={{ state, actions }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
