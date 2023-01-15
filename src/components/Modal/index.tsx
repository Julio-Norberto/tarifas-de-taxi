import { FormModal } from '../FormModal'
import './modal.css'

type ModalProps = {
  id: string | undefined
}

export const Modal: React.FC<ModalProps> = ({id}: ModalProps) => {
  function closeModal() {
    const modal: Element | null = document.querySelector('#modal')
    modal?.classList.add('hide')
  }

  return(
    <div id="modal" className="hide">
      <div className="fade" onClick={closeModal}>

      </div>

      <div className="modal">
          <h2>Editar dados</h2>
          <FormModal id={id} />
      </div>
    </div>
  )
}
