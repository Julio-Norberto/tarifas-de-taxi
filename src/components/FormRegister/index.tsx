import axios from 'axios'
import { useState } from 'react'
import { useFlashMessage } from '../../hooks/UseFlashMessage'
import './formRegister.css'

export const FormRegister: React.FC = () => {
  const [destination, setDestination] = useState()
  const [price, setPrice] = useState()
  const { setFlashMessage } = useFlashMessage()

  async function submitValues() {
    const token = localStorage.getItem('token')

    await axios.post('http://localhost:3000/api/createPrice', {
      destination,
      price,
    }, {
      headers: {
        authorization: `Bearer ${JSON.parse(token!)}`
      }
    }).then(() => {

    }).catch((err) => console.log(err))
  }

  return(
    <div>
      <form action="/tables">

        <div className="form-container">

          <div className="forms">
            <label htmlFor='destination' >Insira o Destino</label>
            <input onChange={(e: any) => setDestination(e.target.value)} type="text" name='destination' placeholder='destino...' />
          </div>

          <div className="forms">
            <label htmlFor='price' >Insira o preço (R$)</label>
            <input onChange={(e: any) => setPrice(e.target.value)} type="text" name='price' placeholder='preço...' />
          </div>

        </div>
        <input onClick={submitValues} className='btn-form' type="submit" value='Cadastrar' />

      </form>
    </div>
  )
}
