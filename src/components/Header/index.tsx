import { Taxi, UserCircle } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import './header.css'

export const Header: React.FC = () => {
  const { authenticated, logout } = useAuth()

  return(
    <header className="header-container">
      <div className='header-content'>
        <a href="/"><Taxi size={32} color='#000' /></a>

        <div className='login-header'>

          {authenticated ? (
            <>
              <a href="/tables">Tabelas</a>

              <a href=""> <li style={{ listStyle: 'none' }} onClick={logout}>Sair</li> </a>

            </>
          ) : <a href="/login">Login</a>}

        </div>
      </div>
      <div style={{ backgroundColor: '#000', height: '10px' }} />
    </header>
  )
}
