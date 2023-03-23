import axios from "axios";
import { useState, useEffect } from "react";
export default function App() {
  const [countries, setCountries] = useState([]);

  let officialName = countries[0].name.official;
  let population = countries[0].population;
  let region = countries[0].region;
  let capital = countries[0].capital;
  let flag = countries[0].flags.png;
  console.log(officialName);

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
      {countries.map(() => (
        <div className="country_card flex flex-col m-6 border-solid bg-white w-60 shadow-lg rounded-md">
          <img src={flag} alt="flag" className=" rounded-t-md"></img>
          <p>{officialName}</p>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital {capital}</p>
        </div>
      ))}
    </div>
  );
}
