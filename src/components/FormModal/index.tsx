import { useState } from 'react'
import axios from 'axios'
import './formModal.css'

type FormModalProps = {
  id: string | undefined
}

export const FormModal: React.FC<FormModalProps> = ({id}: FormModalProps) => {
  const [destination, setDestination] = useState()
  const [price, setPrice] = useState()

  function closeModal() {
    const modal = document.querySelector('#modal')
    modal?.classList.add('hide')
  }

  function submitValues() {
    axios.put(`http://localhost:3000/api/prices/${id}`, {
      destination,
      price,
    }).then(() => alert('Dados alterados com sucesso!')).catch((err) => console.log(err))
  }

  return(
    <form className="form">

      <div className="input_container">
          <label htmlFor="destination">Destino:</label>
          <input onChange={(e:any) => setDestination(e.target.value)} type="text" name='destination' placeholder='Novo destino...' />
      </div>

      <div className="input_container">
          <label htmlFor="price">Preço:</label>
          <input onChange={(e:any) => setPrice(e.target.value)} type="text" name='price' placeholder='Novo preço...' />
      </div>
      <input onClick={submitValues} type="submit" value='Salvar' />
      <button className='btn-close' onClick={closeModal} >Cancelar</button>
    </form>
  )
}
