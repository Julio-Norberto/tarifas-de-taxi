import { useState, useEffect } from 'react'
import { bus } from '../../hooks/UseFlashMessage'
import './message.css'

export const Message: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false)
  const [message, setMessage] = useState<string>()
  const [type, setType] = useState< 'sucess' | 'err' >()

  useEffect(() => {
    bus.addListener('flash', ({ message, type }) => {
      setVisibility(true)
      setMessage(message)
      setType(type)

      setTimeout(() => {
        setVisibility(false)
      }, 3000)
    })

  }, [])

  return(
    <div>
      { visibility ? (
        <div className={`message-container ${type}`}>
          <p> {message} </p>
        </div>
      ) : '' }
    </div>
  )
}
