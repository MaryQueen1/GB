import './App.css'
import Counter from './components/counter/counter'
import Greetings from './components/greetings/greetings'
import MessagesList from './components/messageList/messageList'
import { messages } from './data'
import MessageTwo from './components/messageTwo/messageTwo'
import TextDisplayForm from './components/textDisplayForm/textDisplayForm'
import ThemeSwitcher from './components/themeSwitcher/ihemeSwitcher'
import { SwitcherSem } from './components/switherSem/switherSem'

function App() {

  return (
    <div>
      <Greetings name="Маша"/>
      <Greetings name="Саша"/>
      <Greetings name="Каша"/>
      <Counter/>
      <MessagesList/>
      <MessageTwo message={messages}/>
      <TextDisplayForm/>
      <ThemeSwitcher/>
      <SwitcherSem/>
    </div>
  )
}

export default App
