import { memo, useMemo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'

// React.memo: skip re-rendering a child when its props are unchanged.
const ExpensiveChild = memo(function ExpensiveChild({ onPing }) {
  console.log('ExpensiveChild rendered') // watch the console
  return <button onClick={onPing}>Ping (memoized child)</button>
})
ExpensiveChild.propTypes = { onPing: PropTypes.func.isRequired }

function slowSum(n) {
  let total = 0
  for (let i = 0; i <= n; i++) total += i
  return total
}

// Measure first! Optimize only when you have an actual performance problem.
export default function PerformanceExample() {
  const [text, setText] = useState('')
  const [n, setN] = useState(1000000)
  const [pings, setPings] = useState(0)

  // useMemo caches a computed VALUE until dependencies change.
  const sum = useMemo(() => slowSum(n), [n])

  // useCallback caches a FUNCTION identity so memo() on the child works.
  const handlePing = useCallback(() => setPings((p) => p + 1), [])

  return (
    <Card title="12. Performance: memo, useMemo, useCallback">
      <input
        placeholder="Typing does not recompute"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setN((v) => v + 1000)}>n = {n}</button>
      <p>Sum 0..n = {sum}</p>
      <ExpensiveChild onPing={handlePing} /> Pings: {pings}
    </Card>
  )
}
