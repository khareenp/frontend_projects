import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Search from "../searchbox/Search";
import Filter from "../filter/Filter";
import CountryCard from "../country-card/CountryCard";

export default function Home() {
  const [countries, setCountries] = useState([]);
  //let flag = response.flags.png;
  //console.log(flag);

  async function getCountries() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Layout>
      <div className=" max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between py-12">
          <Search />
          <Filter />
        </div>
        <div className="grid grid-cols-4 gap-10">
          {countries.map((country) => (
            <CountryCard country={country} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
