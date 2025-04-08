import React, { useState } from "react";


// function MyComponents() {
//   const [name, setName] = useState("guest");
//   const [age, setAge] = useState(0);

//   const[isEmployed,setisEmployed]=useState(false);
//   const updateName = () => {
//     setName("sponge");
//   };

//   const updateAge = () => {
//     setAge(age + 1);
//   };

//   const toggleStatus=()=>{
//     setisEmployed(!isEmployed)
//   }

//   return (
//     <div>
//       <p>Name:{name}</p>
//       <button onClick={updateName}>set Name</button>

//       <p>age:{age}</p>
//       <button onClick={updateAge}>set Name</button>

//       <p>isEmployed:{isEmployed?"yes":"no"}</p>
//       <button onClick={toggleStatus}>toogle status</button>
//     </div>
//   );
// }

// export default MyComponents;



// onchange-----------------------------------

function MyComponents() {

  const [name,setName]=useState("");

  function handleNameChange(event) {
    setName(event.target.value)
  }

  return (<>
  <div>
    <input value={name} onChange={handleNameChange} type="text" />
    <p>name: {name} </p>
  </div>
  </>);
}
export default MyComponents;
