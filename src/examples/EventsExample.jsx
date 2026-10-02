import { useState } from 'react'
import Card from '../components/Card'

// EVENT HANDLING: pass a FUNCTION to onClick/onChange/etc.
// Write onClick={handle}, NOT onClick={handle()} (that would call it at render).
// Handlers receive a synthetic event object (same API as the DOM event).
export default function EventsExample() {
  const [message, setMessage] = useState('Click or hover something')

  function handleClick(event) {
    setMessage(`Clicked at x=${event.clientX}, y=${event.clientY}`)
  }

  // To pass arguments, wrap in an arrow function.
  function handleGreet(name) {
    setMessage(`Hi ${name}!`)
  }

  return (
    <Card title="7. Event Handling">
      <p>{message}</p>
      <button onClick={handleClick}>Show coordinates</button>
      <button onClick={() => handleGreet('React')}>Greet</button>
      <button onMouseEnter={() => setMessage('Hovering!')}>Hover me</button>
    </Card>
  )
}
