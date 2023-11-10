import User from "./components/User";




function App() {
const number = 1;
const string = 'text';
const boolean = true;
const obj = {
  name : 'jhon',
  age : 49,
}

  return (
    <>
  <User
   number={number} string={string} boolean={boolean} obj={obj}
   />





    </>
  );
}

export default App;
