import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState({});

  async function getAdvice() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      console.log(response);
      setAdvice(response.data.slip);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="display flex flex-col">
      <div className="card text-lg"> Advice {advice.id}</div>
      <p>{advice.advice}</p>
      <button onClick={getAdvice}>
        <img
          src="../advice-generator-app-main/images/icon-dice.svg"
          alt=""
        ></img>
      </button>
    </div>
  );
}
