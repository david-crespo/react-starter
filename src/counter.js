import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span className="count">Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
