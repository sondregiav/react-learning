import { useState, useEffect } from 'react'
import Card from '../components/Card'

// useEffect runs code AFTER render to sync with something outside React
// (timers, subscriptions, network, document title...).
// The dependency array controls when it re-runs:
//   []        -> once after first render
//   [a, b]    -> when a or b change
//   (omitted) -> after every render
// The returned function is CLEANUP, run before the next effect and on unmount.
export default function EffectExample() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    if (!running) return undefined
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id) // cleanup prevents leaked timers
  }, [running])

  useEffect(() => {
    document.title = `Timer: ${seconds}s`
  }, [seconds])

  return (
    <Card title="4. Side Effects with useEffect">
      <p>Seconds: {seconds} (also shown in the browser tab title)</p>
      <button onClick={() => setRunning((r) => !r)}>
        {running ? 'Pause' : 'Resume'}
      </button>
    </Card>
  )
}
