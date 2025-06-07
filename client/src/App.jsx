import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Create } from './view/Create'
import { Home } from './view/Home'
import { Product } from './view/Product'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Create/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Product' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
