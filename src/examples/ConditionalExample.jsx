import { useState } from 'react'
import Card from '../components/Card'

// CONDITIONAL RENDERING is just JavaScript:
//   - if / early return
//   - ternary:  cond ? <A /> : <B />
//   - logical AND: cond && <A />   (beware: 0 && ... renders "0")
export default function ConditionalExample() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [items, setItems] = useState(0)

  return (
    <Card title="5. Conditional Rendering">
      {loggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      <button onClick={() => setLoggedIn((v) => !v)}>
        {loggedIn ? 'Log out' : 'Log in'}
      </button>
      <button onClick={() => setItems((n) => n + 1)}>Add item</button>
      {items > 0 && <p>You have {items} item(s).</p>}
    </Card>
  )
}
