import React from "react";

export default function CountryCard({ country }) {
  return (
    <div className="country_card flex overflow-hidden  w-full flex-col  bg-red-200 ">
      <div className="card__img overflow-hidden  flex-1 bg-yellow-300">
        <img
          src={country.flags.svg}
          alt="flag"
          className="object-cover h-full w-full rounded-t-md"
        />
      </div>

      <div className="card__text flex-1 pl-6 pt-6 space-y-2 bg-green-200 ">
        <h3 className=" font-bold text-xl">{country.name.common}</h3>
        <div className=" space-y-1 text-sm">
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country?.capital}</p>
        </div>
      </div>
    </div>
  );
}
