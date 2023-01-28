import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFlashMessage } from './UseFlashMessage.js'
import axios from 'axios'

export const useTables = () => {
  const { setFlashMessage } = useFlashMessage()
  const navigate = useNavigate()

  async function updateTableData(destination: string, price: string, id: string) {

    const token = localStorage.getItem('token')

    try {
      await axios.patch(`https://tarifas-de-taxi-backend.vercel.app/prices/${id}`, {
      destination,
      price,
      }, {
      headers: {
        authorization: `Bearer ${JSON.parse(token!)}`
      }
      }).then((response) => response.data)
    } catch(err: any) {
      setFlashMessage(err.response.data.message, 'err')
    }
  }

  async function resgiterValues(destination: string, price: string) {
    const token = localStorage.getItem('token')

    if(!destination || !price){
      return setFlashMessage('Por favor preencha todos os dados', 'err')
    }

    try {
      await axios.post('https://tarifas-de-taxi-backend.vercel.app/createPrice', {
        destination,
        price,
      }, {
        headers: {
          authorization: `Bearer ${JSON.parse(token!)}`
        }
      }).then(() => {})
    } catch(err: any) {
      return setFlashMessage(err.response.data.message, 'err')
    }

    setFlashMessage('Dado cadastrado com sucesso', 'sucess')
    navigate(0)

  }

  return { updateTableData, resgiterValues }
}
