import { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'

// 1) FUNCTIONAL COMPONENT (the modern, recommended way).
// A component is a function that returns JSX. Names must start with a capital.
// PROPS are the inputs, passed like HTML attributes. They are read-only.
function Greeting({ name, role = 'learner' }) {
  return (
    <p>
      Hello, {name}! You are a {role}.
    </p>
  )
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
}

// 2) CLASS COMPONENT (older style; you will meet it in legacy code).
// It extends Component and must implement render(). Props are on this.props.
// Hooks cannot be used in class components.
class LegacyGreeting extends Component {
  render() {
    return <p>Class component says hi to {this.props.name}.</p>
  }
}
LegacyGreeting.propTypes = { name: PropTypes.string.isRequired }

export default function ComponentsExample() {
  return (
    <Card title="1. Components & Props">
      <Greeting name="Ada" />
      <Greeting name="Linus" role="developer" />
      <LegacyGreeting name="Grace" />
    </Card>
  )
}
