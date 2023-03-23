import React from "react";

export default function Filter() {
  const regions = ["Africa", "America", "Europe", "Asia", "Oceania"];
  return (
    <select
      name="region"
      id="region"
      className=" px-2 py-4 w-2/12 rounded-md shadow-sm"
    >
      {regions.map((region, index) => (
        <option key={index} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}
