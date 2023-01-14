import axios from 'axios'
import { SetStateAction, useState } from 'react'
import './formRegister.css'

export const FormRegister: React.FC = () => {
  const [destination, setDestination] = useState()
  const [price, setPrice] = useState()

  function submitValues() {
    axios.post('http://localhost:3000/api/createPrice', {
      destination,
      price,
    }).then(() => alert('Cadastro feito com sucesso'))
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
