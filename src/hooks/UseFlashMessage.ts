import { EventEmitter } from 'events'
const bus = new EventEmitter()

export const useFlashMessage = () => {
  function setFlashMessage(msg: string, type: any) {
    bus.emit('flash', {
      message: msg,
      type: type
    })
  }

  return setFlashMessage
}
