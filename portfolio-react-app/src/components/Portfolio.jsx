import React from "react";
import advice_generator from "../assets/portfolio/advice_generator.png";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: advice_generator,
      codeLink:
        "https://github.com/khareenp/frontend_portfolio/tree/main/advice-generator",
      demoLink: "",
    },
    {
      id: 2,
      src: arrayDestruct,
    },
    {
      id: 3,
      src: reactParallax,
    },
    {
      id: 4,
      src: navbar,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: installNode,
    },
    {
      id: 7,
      src: reactWeather,
    },
  ];
  return (
    <div
      name="portfolio"
      className=" w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="flex flex-col max-w-screen-lg mx-auto w-full h-full p-4 justify-center">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200 "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
