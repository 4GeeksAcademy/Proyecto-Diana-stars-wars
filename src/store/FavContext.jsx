import { createContext, useEffect, useReducer } from "react";
export const FavContext = createContext(null);


const FavReducer = (state, action) => {
  
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter ((element) => element.uid !== action.payload.uid || element.tipo !== action.payload.tipo)
    case 'clear':
      return []
    default:
      return state;
  }
};

export function FavProvider({ children }) {
  const [favs, favActions] = useReducer(FavReducer, []);
  return (
    <FavContext.Provider value={{ favs, favActions }}>
      {children}
    </FavContext.Provider>
  );
}
export default FavContext;