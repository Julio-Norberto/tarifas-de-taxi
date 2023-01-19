import { FormModal } from '../FormModal'
import './modal.css'

type ModalProps = {
  id: string | undefined
}

export const Modal: React.FC<ModalProps> = ({id}: ModalProps) => {
  return(
    <div id="modal" className="hide">
      <div className="modal">
          <h2>Editar dados</h2>
          <FormModal id={id} />
      </div>
    </div>
  )
}
