import './formModal.css'

export const FormModal: React.FC = () => {
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

    </form>
  )
}
