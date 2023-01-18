import { useState, useContext } from 'react'
import { Envelope, Key } from 'phosphor-react'
import { Context } from '../../context/UserContext'

import './login.css'

export const Login: React.FC = () => {
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()

  const { loginUser } = useContext(Context)

  async function handleLogin() {
    loginUser(login!, password!)
  }

  return (
    <div className='login-container'>
      <form className='form-card'>

        <div className='login-title-div'>
            <h2 className='login-title'>Faça Login</h2>
        </div>

        <div className='div-input'>
            <label htmlFor='login' className='align'>Seu Login <Envelope style={{ marginLeft: 10 }} /> </label>
            <input onChange={(e: any) => setLogin(e.target.value)} type="text" name="login" id="login" placeholder="Digite o seu login..." />
        </div>

        <div className='div-input'>
            <label htmlFor='password' className='align'>Sua senha <Key style={{ marginLeft: 10 }} /> </label>
            <input onChange={(e: any) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Digite sua senha..." />
        </div>
        <input onClick={handleLogin} className='btn-register-login' type="button" value="Login" />

      </form>
    </div>
    )
}
