import { useState, useMemo } from 'react'
import Card from '../components/Card'
import useLocalStorage from '../hooks/useLocalStorage'
import TodoItem from './TodoItem'

// Capstone: combines state, lists/keys, forms, events, conditional
// rendering, derived data (useMemo), custom hooks, props and PropTypes.
export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage('learning-todos', [])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  function addTodo(event) {
    event.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, done: false },
    ])
    setText('')
  }

  // Immutable updates: always create new arrays/objects.
  const toggleTodo = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    )
  const deleteTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id))

  const visible = useMemo(
    () =>
      todos.filter((t) =>
        filter === 'all' ? true : filter === 'done' ? t.done : !t.done,
      ),
    [todos, filter],
  )
  const remaining = todos.filter((t) => !t.done).length

  return (
    <Card title="Capstone: Todo App">
      <form onSubmit={addTodo}>
        <input
          placeholder="What needs doing?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <p>
        {['all', 'active', 'done'].map((f) => (
          <button key={f} disabled={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </p>
      {visible.length === 0 ? (
        <p>Nothing here yet.</p>
      ) : (
        <ul className="plain">
          {visible.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
      <p>{remaining} item(s) left</p>
    </Card>
  )
}
