import { useEffect, useState } from "react"
import { Trash, Pencil } from 'phosphor-react'
import { FormRegister } from "../../components/FormRegister"
import { useNavigate } from 'react-router-dom'
import { Modal } from "../../components/Modal"

import axios from 'axios'
import './tables.css'

import { useFlashMessage } from '../../hooks/UseFlashMessage.js'

interface IPricesInfo {
  _id: string
  destination: string
  price: string
}

export const Tables: React.FC = () => {
  const [pricesInfo, setPricesInfo] = useState<IPricesInfo[]>()
  const [id, setId] = useState<string | undefined>()
  const navigate = useNavigate()
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    async function fetchData() {
      await axios.get('https://tarifas-de-taxi-backend.vercel.app/prices')
      .then((res) => {
        setPricesInfo(res.data)
        console.log(res.data)
      })
    }

    fetchData()

  }, [])

  async function handleDelete(index: number) {
    if(pricesInfo) {
      const id = pricesInfo[index]._id
      const token = localStorage.getItem('token')

      await axios.delete(`https://tarifas-de-taxi-backend.vercel.app/prices/remove/${id}`, {
        headers: {
          authorization: `Bearer ${JSON.parse(token!)}`
        }
      })
      .then(() => {
        navigate(0)
      }).catch((err) => console.log(err))
    }

    setFlashMessage('Dado deletado com sucesso!', 'sucess')
  }

  function hiddeOrShowModal(display: boolean, index: number) {
    const modal = document.querySelector('#modal')
    pricesInfo ? setId(pricesInfo[index]._id) : ''
    if(display) {
      modal?.classList.remove('hide')
    }
  }

  return(
    <section className='home-container teste'>
      <Modal id={id} />
      <h1 className="title-table">Cadastro de dados</h1>
      <FormRegister />

      <div>
        {pricesInfo?.length !== 0 ? (
          <table className="table-princ" border={1}>
            <thead>
              <tr>
                <th className='padd' align='left'>Destino</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
            </thead>
            {pricesInfo?.map((princeInfo, index) => (
              <tbody key={index}>
                <tr style={{ backgroundColor: index % 2 == 0 ? '#ddd' : '' }}>
                  <td height={50}>{pricesInfo[index].destination}</td>
                  <td className='esquerda'>R$ {pricesInfo[index].price}</td>
                  <td align="center">
                    <button onClick={() => hiddeOrShowModal(true, index)} > <Pencil size={20} color='blue' /> </button>
                    <button onClick={() => handleDelete(index)} > <Trash size={20} color='red' /> </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : 'Ainda não existem dados cadastrados =('}
      </div>
    </section>
  )
}
