import { useState } from 'react'
import Card from '../components/Card'

// CONTROLLED COMPONENTS: the input's value lives in React state.
// value={state} + onChange={update state} keeps React as the single source
// of truth, which makes validation and resetting easy.
export default function FormExample() {
  const [form, setForm] = useState({ name: '', color: 'blue', agree: false })
  const [submitted, setSubmitted] = useState(null)

  // One handler for many fields, using the input's `name` attribute.
  function handleChange(event) {
    const { name, type, value, checked } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault() // stop the browser's full-page reload
    setSubmitted(form)
  }

  return (
    <Card title="8. Forms & Controlled Components">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />
        <select name="color" value={form.color} onChange={handleChange}>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          I agree
        </label>{' '}
        <button type="submit" disabled={!form.name || !form.agree}>
          Submit
        </button>
      </form>
      {submitted && <p>Submitted: {JSON.stringify(submitted)}</p>}
    </Card>
  )
}
