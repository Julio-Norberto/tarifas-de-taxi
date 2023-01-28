import { useState, useEffect } from 'react'
import { useTables } from '../../hooks/useTables'
import axios from 'axios'
import './formModal.css'

type FormModalProps = {
  id: string | undefined
}

export const FormModal: React.FC<FormModalProps> = ({id}: FormModalProps) => {
  const [destination, setDestination] = useState()
  const [price, setPrice] = useState()

  const { updateTableData } = useTables()

  useEffect(() => {
    async function handleSearchData() {
      if(id) {
        await axios.get(`https://tarifas-de-taxi-backend.vercel.app/${id}`)
          .then((res) => {
            setDestination(res.data.destination)
            setPrice(res.data.price)
          }).catch((err) => console.log(err))
      }

      return
    }

    handleSearchData()
  }, [id])

  function closeModal() {
    const modal = document.querySelector('#modal')
    modal?.classList.add('hide')
  }

  return(
    <>
    <form className="form">

      <div className="input_container">
          <label htmlFor="destination">Destino:</label>
          <input value={destination ? destination : ''} onChange={(e:any) => setDestination(e.target.value)} type="text" name='destination' placeholder='Novo destino...' />
      </div>

      <div className="input_container">
          <label htmlFor="price">Preço:</label>
          <input value={price ? price : ''} onChange={(e:any) => setPrice(e.target.value)} type="text" name='price' placeholder='Novo preço...' />
      </div>
      <input onClick={() => updateTableData(destination!, price!, id!)} type="submit" value='Salvar' />

    </form>
    <button className='btn-close' onClick={closeModal} >Cancelar</button>
    </>
  )
}
