import ReactDOM from 'react-dom/client' // Updated import
import {BrowserRouter} from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root')) // Create root

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
