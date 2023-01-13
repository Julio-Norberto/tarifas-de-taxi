import { useState, useEffect, EffectCallback } from 'react'
import axios from 'axios'
import './home.css'

interface teste {
  destination: string
  price: string
}

export const Home: React.FC = () => {
  const [pricesInfo, setPricesInfo] = useState<teste[]>()

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
      <h1>Tabela de preços</h1>

      <div>
        <table border={1}>
          <thead>
            <th className='padd' align='left'>Destino</th>
            <th>Preço</th>
          </thead>
          {pricesInfo?.map((princeInfo, index) => (
            <tbody>
              <tr style={{ backgroundColor: index % 2 == 0 ? '#ddd' : '' }}>
                <td height={50}>{pricesInfo[index].destination}</td>
                <td className='esquerda'>R$ {pricesInfo[index].price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  )
}
