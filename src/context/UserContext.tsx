import { createContext } from 'react'

const Context = createContext('')

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Context.Provider value={'teste'} > {children} </Context.Provider>
}

export { Context }
