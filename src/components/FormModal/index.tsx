import './formModal.css'

export const FormModal: React.FC = () => {
  function closeModal() {
    const modal = document.querySelector('#modal')
    modal?.classList.add('hide')
  }

  return(
    <form className="form">

      <div className="input_container">
          <label htmlFor="destination">Destino:</label>
          <input type="text" name='destination' placeholder='Novo destino...' />
      </div>

      <div className="input_container">
          <label htmlFor="price">Preço:</label>
          <input type="text" name='price' placeholder='Novo preço...' />
      </div>
      <input type="submit" value='Salvar' />
      <button className='btn-close' onClick={closeModal} >Cancelar</button>
    </form>
  )
}
