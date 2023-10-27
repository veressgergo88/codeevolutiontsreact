import './App.css'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'

function App7() {
    return (
        <div className='App'>
            <Private isLoggedIn={true} component={Profile} />
        </div>
    )
}

export default App7