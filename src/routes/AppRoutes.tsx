import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Tables } from '../pages/Table'

export const AppRoutes: React.FC = () => {
  return(
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/tables' element={ <Tables /> } />
      </Routes>
    </div>
  )
}
