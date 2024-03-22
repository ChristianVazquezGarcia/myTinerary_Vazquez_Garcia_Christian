import Layout from "../components/Layout"
import { getAllCountries } from "../services/citiesQueries";
import authQueries from "../services/authQueries";
import alerts from "../helpers/alerts";
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

const Register = () => {
    
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
      });
      const [countries, setCountries] = useState([]);
      const navigate = useNavigate();
      useEffect(() => {
          getAllCountries().then(setCountries);
        }, []);
        
    
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
        authQueries.register(aux).then((response) => {
          if (response.status == 201) {
            alerts.success("Account created, you can login now");
            navigate("/login");
          } else {
            alerts.error(response.statusMsg);
          }
        });
      }
    
    
    
    
    return (
        <Layout>

            <main className="grow pt-20 flex flex-col gap-5 justify-center items-center bg-slate-100 w-[60%] max-md:w-full">
                <h2 className="text-4xl font-bold">Register</h2>
                <div className="border w-10/12 py-5 flex flex-col items-center h-fit bg-gray-600 rounded-lg">
                    <form
                        onSubmit={handleSubmit}
                        onInput={handleInput}
                        className="w-full text-zinc-950 flex flex-col items-center gap-5 pb-5"
                    >
                        <input
                            className="w-10/12 h-10 outline-none rounded-lg ps-5"
                            type="text"
                            placeholder="First Name"
                            name="first_name"
                        />
                        <input
                            className="w-10/12 h-10 outline-none rounded-lg ps-5"
                            type="text"
                            placeholder="Surname"
                            name="last_name"
                        />
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
                        <select
                            className="w-10/12 h-10 outline-none rounded-lg ps-5"
                            name="country"
                            defaultValue={formData.country}
                        >   
                        <option value=" none " >
                            Select your country
                        </option>
                            {countries.length > 0 &&
                                countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                        </select>
                        <input
                            className="w-10/12 h-10 outline-none rounded-lg ps-5"
                            type="text"
                            name="image"
                            placeholder="URL image"
                        />
                        <input
                            type="submit"
                            className="cursor-pointer bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl"
                            value="Submit"
                        />
                    </form>
                    <Link
                        className="flex justify-center items-center bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl"
                        to="/login"
                    >
                        Login
                    </Link>
                </div>
            </main>
        </Layout>
    )
}

export default Register