import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Message } from './components/Message'

import './App.css'

import { UserProvider } from './context/UserContext'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Message />
        <AppRoutes />
        <Footer />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
