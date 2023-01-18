import { EventEmitter } from 'events'
export const bus = new EventEmitter()

export const useFlashMessage = () => {
  function setFlashMessage(msg: string, type: 'success' | 'err') {
    bus.emit('flash', {
      message: msg,
      type: type
    })
  }

  return setFlashMessage
}
