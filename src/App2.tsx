import './App.css'
import { Counter } from './components/state/Counter'
import { LoggedIn } from './components/state/LoggedIn'
import { User } from './components/state/User'

function App2() {
  return (
    <>
        <LoggedIn />
        <User />
        <Counter />
    </>
  )
}

export default App2