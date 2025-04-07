function List() {
  const fruits = [
    { name: "apple", calories: 95 },
    { name: "orange", calories: 9 },
    { name: "banana", calories: 12 },
    { name: "coconut", calories: 33 },
  ];

  
const lowacalorieFruit=fruits.filter((fruit) => {
  return fruit.calories>10;
}
)

  
  const listItems = lowacalorieFruit.map((fruit) => <li key={fruit.name} > {fruit.name}:&nbsp; <b>{fruit.calories}</b> </li>);

  return <ul>{listItems}</ul>;
}

export default List;
