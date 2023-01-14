export const FormRegister: React.FC = () => {
  return(
    <div>
      <form action="" method="post">

        <div>

          <div>
            <label>Insira o Destino</label>
            <input type="text" />
          </div>

          <div>
            <label>Insira o preço (R$)</label>
            <input type="text" />
          </div>

        </div>
        <input type="submit" value='Cadastrar' />

      </form>
    </div>
  )
}
