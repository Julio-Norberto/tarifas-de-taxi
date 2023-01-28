import { useState } from 'react'
import { useTables } from '../../hooks/useTables'
import './formRegister.css'

export const FormRegister: React.FC = () => {
  const [destination, setDestination] = useState()
  const [price, setPrice] = useState()
  const { resgiterValues } = useTables()

  return(
    <div>
      <form>

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
        <input onClick={() => resgiterValues(destination!, price!)} className='btn-form' type="button" value='Cadastrar' />

      </form>
    </div>
  )
}
