import React from "react";

export default function CountryCard({ country }) {
  return (
    <div className="flex flex-col h-96 bg-slate-50 shadow-lg rounded-md">
      <div className="h-1/2 flex items-center justify-center">
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="rounded-t-md w-full h-full"
        />
      </div>
      <div className="card__text  pl-6 pt-6 space-y-2 h-1/2">
        <h3 className=" font-bold text-2xl">{country.name.common}</h3>
        <div className=" space-y-1 text-md">
          <p>
            <span className="font-semibold text-xl">Population: </span>
            {country.population}
          </p>
          <p>
            <span className="font-semibold text-xl">Region: </span>
            {country.region}
          </p>
          <p>
            <span className="font-semibold text-xl">Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}
