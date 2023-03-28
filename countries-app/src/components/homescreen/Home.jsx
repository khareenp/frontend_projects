import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Search from "../searchbox/Search";
import Filter from "../filter/Filter";
import CountryCard from "../country-card/CountryCard";
import { useFetch } from "../../helpers/useFetch";

export default function Home() {
  // const [countries, setCountries] = useState([]);
  const [urlParam, setParam] = useState("all");
  const [text, setText] = useState("");
  const { data: countries } = useFetch(urlParam);

  // async function getCountries() {
  //   try {
  //     const response = await axios.get(
  //       `https://restcountries.com/v3.1/${urlParam}`
  //     );
  //     setCountries(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   getCountries();
  // }, [urlParam]);
  const handleSearch = (text) => {
    setText(text.toLowerCase());
  };

  const handleChange = (region) => {
    setParam(`region/${region}`);
  };

  return (
    <Layout>
      <div className=" max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between py-12">
          <Search handleSearch={handleSearch} />
          <Filter handleChange={handleChange} />
        </div>
        <div className="grid grid-cols-4 gap-10">
          {countries
            .filter((country) =>
              country.name.common.toLowerCase().includes(text)
            )
            .map((country) => (
              <CountryCard country={country} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
