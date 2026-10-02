import PropTypes from 'prop-types'
import Card from '../components/Card'

// COMPOSITION: build big UIs from small, reusable parts instead of
// inheritance. Components accept other elements via `children` or props.
function Profile({ name, children }) {
  return (
    <div className="profile">
      <strong>{name}</strong>
      {children}
    </div>
  )
}
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
}

function Badge({ label }) {
  return <span> [{label}]</span>
}
Badge.propTypes = { label: PropTypes.string.isRequired }

export default function CompositionExample() {
  return (
    <Card title="9. Composition & Reusability">
      <Profile name="Ada">
        <Badge label="admin" />
      </Profile>
      <Profile name="Linus">
        <Badge label="maintainer" />
        <Badge label="kernel" />
      </Profile>
    </Card>
  )
}
