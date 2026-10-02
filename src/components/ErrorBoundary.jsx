import { Component } from 'react'
import PropTypes from 'prop-types'

// ERROR BOUNDARY: catches errors thrown while rendering its children and
// shows a fallback UI instead of crashing the whole app.
// Must be a CLASS component (no hook equivalent exists yet).
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Caught by ErrorBoundary:', error, info.componentStack)
  }

  reset = () => this.setState({ error: null })

  render() {
    if (this.state.error) {
      return (
        <div role="alert" className="error">
          <p>Something went wrong: {this.state.error.message}</p>
          <button onClick={this.reset}>Try again</button>
        </div>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = { children: PropTypes.node }
