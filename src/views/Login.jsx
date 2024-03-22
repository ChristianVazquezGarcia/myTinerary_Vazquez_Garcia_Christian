import Layout from "../components/Layout"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import authQueries from "../services/authQueries";
import alerts from "../helpers/alerts";
import { useDispatch } from "react-redux";
import { login } from "../Redux/actions/userActions";

const Login = ()=>{

    
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
      });

    function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    const aux = { ...formData };
    aux[name] = value;
    setFormData(aux);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const aux = { ...formData };
        for (const key in aux) {
          if (!aux[key]) delete aux[key];
        }
        authQueries.login(aux).then((response) => {
          if (response.status == 200) {
            dispatch(login(response.data))
            alerts.success("Welcome "+ response.data.first_name);
            navigate("/");
          } else {
            alerts.error(response.statusMsg);
          }
        })}

    return(
        <Layout>
            <main className="grow pt-20 flex flex-col gap-5 justify-center items-center bg-slate-100 w-[60%] max-md:w-full">
                <h2 className="text-4xl font-bold italic">Login</h2>
                <div className="border rounded-lg w-[60%] py-5 flex flex-col items-center h-fit bg-gray-600">
                    <form
                    onSubmit={handleSubmit}
                       onInput={handleInput}
                        className="w-full text-zinc-950 flex flex-col items-center gap-5 pb-5"
                    >
                        
                        <input
                            className="w-10/12 h-10 outline-none rounded-lg ps-5"
                            type="email"
                            placeholder="Email"
                            name="email"
                        />
                        <input
                            className="w-10/12 h-10 outline-none rounded-lg ps-5"
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                        <input
                            type="submit"
                            className="cursor-pointer bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl"
                            value="Login"
                        />
                    </form>
                    <Link
                        className="flex justify-center items-center bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl"
                        to="/register"
                    >
                        Create Account!
                    </Link>
                </div>
            </main>
        </Layout>
    )
}

export default Login