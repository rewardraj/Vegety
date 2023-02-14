import Home from './handlers/Home'
import './assets/styles/globalStyles.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App
