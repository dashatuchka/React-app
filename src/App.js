// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count} раз[а]</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
