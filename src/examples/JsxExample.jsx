import Card from '../components/Card'

// JSX RULES:
// 1. Return ONE root element (or a Fragment <>...</>).
// 2. Close every tag, including <img /> and <input />.
// 3. Use className instead of class, htmlFor instead of for.
// 4. camelCase attributes and event names (onClick, tabIndex).
// 5. Use {} to embed any JavaScript expression (not statements).
// 6. style takes an object: style={{ color: 'red' }}.
export default function JsxExample() {
  const user = { first: 'Sam', last: 'Smith' }
  const total = 2 + 3

  return (
    <Card title="2. JSX Syntax">
      <>
        <p>
          Name: {user.first} {user.last}
        </p>
        <p>2 + 3 = {total}</p>
        <p style={{ color: 'rebeccapurple', fontWeight: 'bold' }}>
          Inline style object
        </p>
        <label htmlFor="jsx-input">Label uses htmlFor: </label>
        <input id="jsx-input" className="jsx-input" />
      </>
    </Card>
  )
}
