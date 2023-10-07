import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sistema from './views/Sistema'

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sistema/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
