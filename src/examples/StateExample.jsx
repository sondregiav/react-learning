import { useState } from 'react'
import Card from '../components/Card'

// STATE: data that changes over time. When state changes, React re-renders.
// useState returns [currentValue, setterFunction].
// Rules for hooks: call them at the top level of components/custom hooks only.
export default function StateExample() {
  const [count, setCount] = useState(0)

  // Never mutate state directly (count++). Always use the setter.
  // When the new value depends on the old one, pass an updater function.
  return (
    <Card title="3. State with useState">
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </Card>
  )
}
