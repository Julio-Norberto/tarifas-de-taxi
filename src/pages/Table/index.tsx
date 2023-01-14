import { useEffect, useState } from "react"
import { Trash, Pencil } from 'phosphor-react'
import { FormRegister } from "../../components/FormRegister"
import axios from 'axios'

interface IPricesInfo {
  destination: string
  price: string
}

export const Tables: React.FC = () => {
  const [pricesInfo, setPricesInfo] = useState<IPricesInfo[]>()

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

  return(
    <section className='home-container'>
      <h1>Cadastro de dados</h1>
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
                  <td> <button> <Pencil size={20} color='blue' /> </button> <button> <Trash size={20} color='red' /> </button> </td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : 'Ainda não existem dados cadastrados =('}
      </div>
    </section>
  )
}
