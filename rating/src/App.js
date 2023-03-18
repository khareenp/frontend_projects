import React from "react";
import { useState } from "react";
import star from "./icon-star.svg";
import thanks from "./illustration-thank-you.svg";

export default function App() {
  const myArr = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(1);
  const [display, setDisplay] = useState(true);
  console.log(rating);

  return (
    <div className="display w-full h-screen bg-gray-900 flex items-center justify-center text-gray-100">
      {display ? (
        <div className="rating flex flex-col border-solid border-0 rounded-xl bg-slate-800 w-3/12 h-3/6 px-4 space-y-4 py-6">
          <div className="circle">
            <img
              src={star}
              alt=""
              className="star border-solid border-0 rounded-full px-3 py-3 bg-gray-600"
            ></img>
          </div>
          <h1 className="title text-2xl">How did we do?</h1>
          <p className="prompt text-sm">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>{" "}
          <div className="numbers flex justify-between space-x-2">
            {" "}
            {myArr.map((x) => (
              <button
                className="ratings border-solid border-0 rounded-full bg-slate-600 p-3 w-2/6 active:bg-orange-500 focus:bg-orange-500"
                onClick={() => setRating(x)}
              >
                {x}
              </button>
            ))}
          </div>
          <button
            className="submit  border-0 rounded-2xl w-full p-2 bg-orange-500 active:bg-gray-50 active:text-orange-500 "
            onClick={() => setDisplay(!display)}
          >
            Submit
          </button>
        </div>
      ) : (
        //
        <div className="thankyou flex flex-col border-solid border-0 rounded-xl bg-slate-800 w-3/12 h-3/6 px-6 space-y-4 py-6 items-center">
          <img src={thanks} alt="" width="180px"></img>
          <p className=" text-sm text-orange-500 border-solid border-0 bg-slate-600 rounded-full py-1 px-3">
            You selected {rating} out of 5{" "}
          </p>
          <h2 className=" text-2xl font-bold">Thank you!</h2>
          <p className=" text-sm text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
        //
      )}
    </div>
  );
}
