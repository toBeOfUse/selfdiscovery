import { useState } from "react";

export function TestButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((c) => c + 1)}>Click me! {count}</button>;
}
