import PropTypes from 'prop-types'

// A small reusable wrapper used by every example.
// `children` is a special prop: whatever is placed between <Card>...</Card>.
export default function Card({ title, children }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

// PropTypes validate props at runtime (in development) and document them.
Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}
