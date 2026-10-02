import { useState, useEffect } from 'react'

// CUSTOM HOOK: a function whose name starts with "use" and that calls other
// hooks. It lets you reuse stateful logic between components.
// Works like useState, but persists the value in localStorage.
export default function useLocalStorage(key, initialValue) {
  // Passing a function to useState makes it run only on the first render.
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  // Side effect: save whenever key or value changes.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage may be unavailable (private mode, quota); ignore.
    }
  }, [key, value])

  return [value, setValue]
}
