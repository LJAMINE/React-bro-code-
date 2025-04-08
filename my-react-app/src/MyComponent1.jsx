import React, { useState } from "react";
function MyComponent1() {
  const [food, setFood] = useState([
    "apple","orange","banana"
  ]);

  function handleaddFood() {
    const newFood =document.getElementById("foodInput").value ;
    document.getElementById("foodInput").value =""

    setFood(f=>[...f,newFood])
}

function removeFood(index) {
    setFood(food.filter((_,i)=>i!==index));
}


 
  return (
    <div>
      <h1>list of food</h1>
      <ul>
        {food.map((food,index)=>
        <li key={index} onClick={()=>removeFood(index)}  >{food}</li>)}
      </ul>
      <input type="text" id="foodInput" placeholder="enter food name " />
      <button onClick={handleaddFood} >add food</button>
    </div>
  );
}

export default MyComponent1;
