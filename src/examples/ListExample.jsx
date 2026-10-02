import Card from '../components/Card'

const fruits = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
]

// LISTS: use .map() to turn data into elements.
// Each item needs a stable, unique `key` so React can track it between
// renders. Prefer database ids; avoid array indexes if the list can reorder.
export default function ListExample() {
  return (
    <Card title="6. Lists & Keys">
      <ul className="plain">
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </Card>
  )
}
