import { Taxi } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import './header.css'

export const Header: React.FC = () => {
  const { authenticated, logout } = useAuth()

  return(
    <header className="header-container">
      <div className='header-content'>
        <Link to="/"><Taxi size={32} color='#000' /></Link>

        <div className='login-header'>

          {authenticated ? (
            <>
              <Link to="/tables">Tabelas</Link>

              <Link to=""> <li style={{ listStyle: 'none' }} onClick={logout}>Sair</li> </Link>

            </>
          ) : <Link to="/login">Login</Link>}

        </div>
      </div>
      <div style={{ backgroundColor: '#000', height: '10px' }} />
    </header>
  )
}
