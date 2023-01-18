import { createContext } from 'react'

const Context = createContext('arroz docinho')

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Context.Provider value={''} > {children} </Context.Provider>
}

export { Context }
