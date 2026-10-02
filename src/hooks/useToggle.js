import { useState, useCallback } from 'react'

// Another custom hook: boolean state with a stable toggle function.
export default function useToggle(initial = false) {
  const [on, setOn] = useState(initial)
  const toggle = useCallback(() => setOn((prev) => !prev), [])
  return [on, toggle]
}
