import React, { useState } from "react";

function MyComponents() {
  const [name, setName] = useState("guest");
  const [age, setAge] = useState(0);

  const[isEmployed,setisEmployed]=useState(false);
  const updateName = () => {
    setName("sponge");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const toggleStatus=()=>{
    setisEmployed(!isEmployed)
  }

  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>set Name</button>

      <p>age:{age}</p>
      <button onClick={updateAge}>set Name</button>

      <p>isEmployed:{isEmployed?"yes":"no"}</p>
      <button onClick={toggleStatus}>toogle status</button>
    </div>
  );
}

export default MyComponents;
