import { useEffect, useState } from "react"
import { Trash, Pencil } from 'phosphor-react'
import { FormRegister } from "../../components/FormRegister"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './tables.css'
import { Modal } from "../../components/Modal"

interface IPricesInfo {
  _id: string
  destination: string
  price: string
}

export const Tables: React.FC = () => {
  const [pricesInfo, setPricesInfo] = useState<IPricesInfo[]>()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      await axios.get('http://localhost:3000/api/prices')
      .then((res) => {
        setPricesInfo(res.data)
        console.log(res.data)
      })
    }

    fetchData()

  }, [])

  function handleDelete(index: number) {
    if(pricesInfo) {
      const id = pricesInfo[index]._id
      axios.delete(`http://localhost:3000/api/prices/remove/${id}`)
      .then(() => {
        alert('Dado deletado com sucesso!')
        navigate(0)

      }).catch((err) => console.log(err))
    }
  }

  function hiddeOrShowModal(display: any) {
    const modal = document.querySelector('#modal')
    if(display) {
      modal?.classList.remove('hide')
    }
  }

  return(
    <section className='home-container teste'>
      <Modal />
      <h1 className="title-table">Cadastro de dados</h1>
      <FormRegister />

      <div>
        {pricesInfo ? (
          <table border={1}>
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
                    <button onClick={hiddeOrShowModal} > <Pencil size={20} color='blue' /> </button>
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
