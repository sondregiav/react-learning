import { memo } from 'react'
import PropTypes from 'prop-types'

// Presentational component: receives data and callbacks via props.
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label className={todo.done ? 'done' : ''}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />{' '}
        {todo.text}
      </label>{' '}
      <button
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        ✕
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default memo(TodoItem)
