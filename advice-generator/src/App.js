import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import dice from "./icon-dice.svg";
import divider from "./pattern-divider-desktop.svg";

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
    <div className="display flex w-full h-screen justify-center items-center bg-slate-900 text-gray-400">
      <div className="card flex flex-col bg-gray-700 w-2/6 h-1/3 p-9 text-center items-center rounded-lg justify-between font-bold">
        <div className="title text-green-500 tracking-widest text-sm">
          {" "}
          Advice #{advice.id}
        </div>
        <p className=" text-2xl">"{advice.advice}"</p>
        <img src={divider} alt="divider" className="mb-6"></img>
        <button
          className="border-0 border-solid rounded-full absolute bg-green-500 p-5 mt-40"
          onClick={getAdvice}
        >
          <img src={dice} alt="x" className=" h-8 w-8"></img>
        </button>
      </div>
    </div>
  );
}
