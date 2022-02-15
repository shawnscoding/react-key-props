import React from "react";

function Counter() {
  console.log("Counter called");

  const [count, setCount] = React.useState(() => {
    console.log("Counter useState initializer");
    return 0;
  });
  const increment = () => setCount((c) => c + 1);

  React.useEffect(() => {
    console.log("Counter useEffect callback");
    return () => {
      console.log("Counter useEffect cleanup");
    };
  }, []);

  console.log("Counter returning react elements");
  return <button onClick={increment}>{count}</button>;
}

const arr = [1, 2, 3];

function CounterParent() {
  // using useReducer this way basically ensures that any time you call
  // setCounterKey, the `counterKey` is set to a new object which will
  // make the `key` different resulting in React unmounting the previous
  // component and mounting a new one.
  const [counterKey, setCounterKey] = React.useReducer((c) => c + 1, 0);
  return (
    <div>
      <button onClick={setCounterKey}>reset</button>
      {arr.map((el) => (
        <React.Fragment key={el}>
          <Counter />
        </React.Fragment>
      ))}
    </div>
  );
}

export default CounterParent;
