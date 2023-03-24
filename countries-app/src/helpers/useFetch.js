import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (param) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/${param}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [param]);

  return { data };
};
