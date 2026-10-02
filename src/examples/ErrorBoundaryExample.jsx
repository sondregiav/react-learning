import { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import ErrorBoundary from '../components/ErrorBoundary'

function Bomb({ explode }) {
  if (explode) throw new Error('Boom! A render error')
  return <p>All quiet. Click the button to throw an error.</p>
}

Bomb.propTypes = { explode: PropTypes.bool.isRequired }

export default function ErrorBoundaryExample() {
  const [explode, setExplode] = useState(false)
  return (
    <Card title="11. Error Boundaries">
      <ErrorBoundary key={String(explode)}>
        <Bomb explode={explode} />
      </ErrorBoundary>
      <button onClick={() => setExplode((e) => !e)}>
        {explode ? 'Defuse' : 'Trigger error'}
      </button>
    </Card>
  )
}
