function Button() {
  //   let count = 0;
  //   const handleClick = (name) => {
  //     // if (count < 3) {
  //     //   count++;
  //     //   console.log(`${name} you clicked me ${count} time/s`);
  //     // } else {
  //     //   console.log(`${name} stop clicking me `);
  //     // }
  //   };

  const handlClick = (e) => e.target.textContent="ouch";

  return (
    <button className="button" onDoubleClick={(e) => handlClick(e)}>
      click me
    </button>
  );
}

export default Button;
