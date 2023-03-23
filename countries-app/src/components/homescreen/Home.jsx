import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import Search from "../searchbox/Search";

export default function Home() {
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="screen h-full w-full bg-slate-100">
      <NavBar />
      <div className="m-4">
        {" "}
        <Search />
      </div>
      <div className="grid grid-cols-5">
        {countries.map(() => (
          <div className="country_card flex flex-col m-6 border-solid bg-white w-60 shadow-lg rounded-md">
            <img src={"flag"} alt="flag" className=" rounded-t-md"></img>
            <p>name</p>
            <p>Population: {"population"}</p>
            <p>Region: {"region"}</p>
            <p>Capital {"capital"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
