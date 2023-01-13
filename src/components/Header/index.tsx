import { Taxi, UserCircle } from 'phosphor-react'
import './header.css'

export const Header: React.FC = () => {
  return(
    <header className="header-container">
      <div className='header-content'>
        <a href="/"><Taxi size={32} color='#000' /></a>

        <div className='login-header'>
          <a href="/login">Login</a>
          <UserCircle size={22} color='#000' />
        </div>
      </div>
      <div style={{ backgroundColor: '#000', height: '10px' }} />
    </header>
  )
}
