import Home from "./views/Home"
import CitiesPage from "./views/CitiesPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'




function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/CitiesPage" element={<CitiesPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
