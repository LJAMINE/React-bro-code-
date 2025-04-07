// import Student from "./Student.jsx";
import UserGreetings from "./UserGreetings.jsx";

// conditionnal rendering =  allow to control what gets rendered in your application based on certain condition
// show , hide change componetn
function App() {
  return (
    <>
      <UserGreetings isLoggedIn={false} username="brocode" />
      <UserGreetings isLoggedIn={true} />
    </>
  );
}

export default App;
