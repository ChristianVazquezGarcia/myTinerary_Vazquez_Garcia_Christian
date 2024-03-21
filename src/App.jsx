import Home from "./views/Home"
import CitiesPage from "./views/CitiesPage"
import Details from "./views/Details"
import Register from "./views/Register"
import Login from "./views/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "../src/Redux/store"
import { Provider } from "react-redux"
import { ToastContainer } from 'react-toastify';
import './App.css'




function App() {
  

  return (

    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/CitiesPage" element={<CitiesPage/>}/>
      <Route path="/CitiesPage/:id" element={<Details/>}/>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
    </Routes>
    </Provider>
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
