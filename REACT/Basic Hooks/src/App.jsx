import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <CounterWithTitle />
      <UserInput prop1={"someValue"} />
    </>
  );
}
const CounterWithTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log(`Count is now: ${count}`);
  }, [count]);
  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default App;

function UserInput(props) {
  const [input, setInput] = useState("");
  useEffect(() => {
    document.title = `Hello: ${input}`;
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <p>Your name: {input}</p>
      <p>Current prop: {props.prop1}</p>
      <input type={"text"} onChange={handleInputChange} />
    </div>
  );
}
