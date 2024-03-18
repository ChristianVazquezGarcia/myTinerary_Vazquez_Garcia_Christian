import Home from "./views/Home"
import CitiesPage from "./views/CitiesPage"
import Details from "./views/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "../src/Redux/store"
import { Provider } from "react-redux"
import './App.css'




function App() {
  

  return (

    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/CitiesPage" element={<CitiesPage/>}/>
      <Route path="/CitiesPage/:id" element={<Details/>}/>
    </Routes>
    </Provider>
    </BrowserRouter>
  )
}

export default App
