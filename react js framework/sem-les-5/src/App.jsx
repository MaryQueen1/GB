import './App.css'
import { UserProvider } from './context/UserContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <UserProvider>
      <ThemeProvider>
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
