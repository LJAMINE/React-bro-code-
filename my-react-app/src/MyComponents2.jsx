import { element } from "prop-types";
import React, { useState } from "react";
function MyComponent2() {
  const [cars, setCars] = useState([]);
  //   const [carYear, setcarYear] = useState([new Date().getFullYear]);
  const [carYear, setcarYear] = useState(new Date().getFullYear());

  const [carMake, setcarMake] = useState([""]);
  const [carModel, setcarModel] = useState([""]);

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);
  }
  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }
  function handleYearchange(event) {
    setcarYear(event.target.value);
  }
  function handleMakechange(event) {
    setcarMake(event.target.value);
  }
  function handlemodelchange(event) {
    setcarModel(event.target.value);
  }

  return (
    <div>
      <h2>list of car Objects </h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {" "}
            {car.year}
            {car.make}
            {car.model}{" "}
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={carYear}
        onChange={handleYearchange}
        placeholder="carYear"
      />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakechange}
        placeholder="carMake"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handlemodelchange}
        placeholder="carModel"
      />
      <br />

      <button onClick={handleAddCar}>add a car</button>
    </div>
  );
}

export default MyComponent2;
