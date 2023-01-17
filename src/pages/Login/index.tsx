import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Envelope, Key } from 'phosphor-react'
import './login.css'

export const Login: React.FC = () => {
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  async function handleLogin() {
    await axios.post('http://localhost:3000/api/login', {
    login,
    password,
    }).then(() => {
      navigate('/tables')
    }).catch((err) => console.log(err))
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
