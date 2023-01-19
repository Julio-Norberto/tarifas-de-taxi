import { Taxi, UserCircle } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import './header.css'

export const Header: React.FC = () => {
  const { authenticated } = useAuth()

  return(
    <header className="header-container">
      <div className='header-content'>
        <a href="/"><Taxi size={32} color='#000' /></a>

        <div className='login-header'>
          <a href="/login">Login</a>
          <UserCircle size={22} color='#000' />

          {authenticated ? (
            <>
              <a href="">Tabelas</a>

              <a href="">Sair</a>
            </>
          ) : ''}

        </div>
      </div>
      <div style={{ backgroundColor: '#000', height: '10px' }} />
    </header>
  )
}
