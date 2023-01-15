import { FormModal } from '../FormModal'
import './modal.css'

export const Modal = () => {
  function closeModal() {
    const modal: Element | null = document.querySelector('#modal')
    modal?.classList.add('hide')
  }

  return(
    <div id="modal" className="hide">
      <div className="fade" onClick={closeModal}>

      </div>

      <div className="modal">
          <h2>Texto Modal</h2>
          <FormModal />
      </div>
    </div>
  )
}
