
import './App.css'
import Banner from './components/Banner/Banner'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import WorksBestWith from './components/worksBestWith/WorksBestWith'
import CoreFeatures from './components/CoreFeatures/coreFeatures'
import Faq from './components/FAQ/Faq'
import Footer from './components/Footer/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing'
// import Deshboard from "./pages/Dashboard";
import Deshboard from "./pages/DeshBoard";
import Login from "./pages/Login";  
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SignUp from './components/SignUp/SignUp'
function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing></Landing>} />
        <Route path="/dashboard" element={<ProtectedRoute>
      <Deshboard></Deshboard>
    </ProtectedRoute>} />
        <Route path='/login' element={<Login></Login>} /> 
        <Route path='/signup' element={<SignUp></SignUp>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
