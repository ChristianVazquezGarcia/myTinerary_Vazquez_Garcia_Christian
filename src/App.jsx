import Home from "./views/Home"
import CitiesPage from "./views/CitiesPage"
import Details from "./views/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'




function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/CitiesPage" element={<CitiesPage/>}/>
      <Route path="/CitiesPage/:id" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
