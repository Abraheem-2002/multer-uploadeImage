import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Create } from './view/Create'
import { Home } from './view/Home'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Create/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
