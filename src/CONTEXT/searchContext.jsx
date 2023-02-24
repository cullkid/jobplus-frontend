import { useReducer } from "react";
import { createContext } from "react";

const INITIAL_STATE = {
  what: undefined,
  where: undefined,
};

export const SearchContext = createContext(INITIAL_STATE);

const searchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        what: state.what,
        where: state.where,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
