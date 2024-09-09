import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = '0948629971';
  const name = 'Quang';

  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default ContextProvider;