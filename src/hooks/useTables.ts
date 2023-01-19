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
      await axios.patch(`http://localhost:3000/api/prices/${id}`, {
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
      await axios.post('http://localhost:3000/api/createPrice', {
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

  }

  return { updateTableData, resgiterValues }
}
