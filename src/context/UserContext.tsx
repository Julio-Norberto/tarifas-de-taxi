import { createContext } from 'react'
import { useAuth } from '../hooks/useAuth.js'

interface IUserContext {
  authenticated: boolean,
  loginUser: (login: string, password: string) => Promise<void>
}

export const Context = createContext({} as IUserContext)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { authenticated, loginUser } = useAuth()

  return <Context.Provider value={{ authenticated, loginUser }} > {children} </Context.Provider>
}
