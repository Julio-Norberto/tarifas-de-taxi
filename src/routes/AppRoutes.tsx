import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Tables } from '../pages/Table'

import { useAuth } from '../hooks/useAuth.js'

export const AppRoutes: React.FC = () => {
  const { authenticated } = useAuth()

  return(
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/tables' element={ authenticated ? <Tables /> : <Home /> } />
      </Routes>
    </div>
  )
}
