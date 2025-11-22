import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Academics from './pages/Academics'

function App() {

  return (
    <>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/academics' element={<Academics/>}/>



    </Routes>
      <Footer/>
    </>
  )
}

export default App
