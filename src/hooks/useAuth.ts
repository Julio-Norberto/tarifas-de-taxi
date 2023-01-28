import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFlashMessage } from './UseFlashMessage.js'

import axios from 'axios'

const api = axios.create({
  baseURL: "https://tarifas-de-taxi-backend.vercel.app"
})

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const navigate = useNavigate()
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`
      setAuthenticated(true)
    }
  }, [])

  async function loginUser(login: string, password: string) {
    let msgText = "Usuário logado com sucesso!"
    let msgType = 'sucess'

    try {
      const data = await axios.post('https://tarifas-de-taxi-backend.vercel.app/login', {
        login,
        password
      }).then((response) => {
        return response.data
      })

      await authUser(data)
    } catch(err: any) {
      msgText = err.response.data.message
      msgType = 'err'
    }

    setFlashMessage(msgText, msgType)
  }

  async function authUser(data: any) {
    let msgText = "Usuário logado com sucesso!"
    let msgType = 'sucess'

    setAuthenticated(true)

    localStorage.setItem('token', JSON.stringify(data.token))

    navigate('/tables')
    navigate(0)
    navigate('/tables')
  }

  function logout() {
    const msgText = 'Logout feito com sucesso!'
    const msgType = 'sucess'

    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = null
    navigate('/')

    setFlashMessage(msgText, msgType)
  }

  return { authenticated, loginUser, logout }

}
