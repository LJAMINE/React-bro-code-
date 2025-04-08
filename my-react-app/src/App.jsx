// import Student from "./Student.jsx";
import UserGreetings from "./UserGreetings.jsx";
import List from "./List.jsx";
import Button from "./Button.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponents from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

// conditionnal rendering =  allow to control what gets rendered in your application based on certain condition
// show , hide change componetn
function App() {
  return (
    // <>
    //   <UserGreetings isLoggedIn={false} username="brocode" />
    //   <UserGreetings isLoggedIn={true} />
    // </>

    // <List/>

    /* <Button /> */
    /* <ProfilePicture /> */

  <>
    <MyComponents />
    <Counter />
    </>
  );
}

export default App;
