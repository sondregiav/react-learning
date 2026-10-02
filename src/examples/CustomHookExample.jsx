import Card from '../components/Card'
import useLocalStorage from '../hooks/useLocalStorage'
import useToggle from '../hooks/useToggle'

// Using custom hooks from src/hooks. Reload the page: the name persists!
export default function CustomHookExample() {
  const [name, setName] = useLocalStorage('learning-name', '')
  const [visible, toggle] = useToggle(true)

  return (
    <Card title="10. Custom Hooks">
      <input
        placeholder="Saved in localStorage"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={toggle}>{visible ? 'Hide' : 'Show'} greeting</button>
      {visible && <p>Hello, {name || 'stranger'}!</p>}
    </Card>
  )
}
