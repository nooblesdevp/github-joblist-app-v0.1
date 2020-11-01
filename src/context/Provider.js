import React, { createContext, useContext, useReducer } from "react";

export const JobsContext = createContext();

export const Provider = ({ reducer, initialState, children }) => (
  <JobsContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </JobsContext.Provider>
);
export const useStateValue = () => useContext(JobsContext);
