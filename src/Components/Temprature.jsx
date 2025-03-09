//? Q14. Create a TemperatureConverter component where the user inputs Celsius, and the component dynamically calculates and displays Fahrenheit.

import { useState } from "react";

export default function Temprature() {
  let [temp, setTemp] = useState("");
  let [StoredData, setStoredData] = useState("");
  function getData(e) {
    setStoredData(temp);
    setTemp("");
    e.preventDefault();
  }
  function CelciusToFahrenheit(e) {
    let tempp = StoredData;

    tempp = (tempp * 9) / 5 + 32;
    setStoredData(tempp);

    e.preventDefault();
  }

  function CelciusToKelvin(e) {
    let deg = StoredData;
    deg = Number(deg) + 273;

    setStoredData(deg);
    e.preventDefault();
  }

  return (
    <>
      <h1>Temprature Converter</h1>
      <input
        type="text"
        placeholder="Enter Temprature in Celcius"
        required
        value={temp}
        onChange={(e) => {
          setTemp(e.target.value);
          e.preventDefault();
        }}
      />
      <button onClick={getData}>Enter</button>
      <h1>Temprature is : {StoredData} </h1>
      <button onClick={CelciusToFahrenheit}>CelsiustoFahrenite</button>
      <button onClick={CelciusToKelvin}>CelsiustoKelvin</button>
    </>
  );
}
