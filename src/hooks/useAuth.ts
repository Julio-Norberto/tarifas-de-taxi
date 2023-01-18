import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFlashMessage } from './UseFlashMessage.js'

import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000"
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
      const data = await axios.post('http://localhost:3000/api/login', {
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
    setAuthenticated(true)

    localStorage.setItem('token', JSON.stringify(data.token))

    navigate('/tables')
  }

  return { authenticated, loginUser }

}
