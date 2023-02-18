import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import {ReactRouter,BrowserRouter,Route,Router} from 'react-router'
import Checkout from '../component/checkout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Checkout />
    // <BrowserRouter>
    //   <Router>
    //     <Route path='/' element={<Checkout/>}>
     
    // </Route>
    // </Router>
    // </BrowserRouter>
  )
}

export default App
