import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import './App.css'

function App3() {
    return <div className='App'>
        <ThemeContextProvider>
            <Box />
        </ThemeContextProvider>
    </div>
}

export default App3