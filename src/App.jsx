import Home from "./views/Home";
import CitiesPage from "./views/CitiesPage";
import Details from "./views/Details";
import Register from "./views/Register";
import Login from "./views/Login";
import PublicViews from "./guard/PublicViews";
import alerts from "./helpers/alerts";
import authQueries from "./services/authQueries";
import { login } from "./Redux/actions/userActions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect} from "react";
import './App.css'


function App() {
  
  const dispatch = useDispatch(); 
  useEffect(() => {
    authQueries.loginWithToken().then((res) => {
      if (res.status == 200) {
        dispatch(login(res.data));
        alerts.success("Bienvenido " + res.data.first_name);
      }
    });
  }, []);
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/CitiesPage" element={<CitiesPage/>}/>
      <Route path="/CitiesPage/:id" element={<Details/>}/>
      <Route element={<PublicViews/>}>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
      </Route>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
