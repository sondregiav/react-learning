# React Learning Project

A beginner-friendly React project for developers who know HTML, CSS and
JavaScript. Every concept has a small, heavily commented example, plus a
Todo app that combines them.

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build
npm run lint     # ESLint
npm run format   # Prettier
```

## Project structure

```
src/
  main.jsx          entry point
  App.jsx           renders all examples
  index.css         basic global styling
  examples/         one file per concept (read in order 1-12)
  components/       reusable components (Card, ErrorBoundary)
  hooks/            custom hooks (useLocalStorage, useToggle)
  todo/             capstone Todo app
```

## Concepts and where to find them

| #   | Topic                                | File                                  |
| --- | ------------------------------------ | ------------------------------------- |
| 1   | Functional & class components, props | `src/examples/ComponentsExample.jsx`  |
| 2   | JSX rules                            | `src/examples/JsxExample.jsx`         |
| 3   | `useState`                           | `src/examples/StateExample.jsx`       |
| 4   | `useEffect`                          | `src/examples/EffectExample.jsx`      |
| 5   | Conditional rendering                | `src/examples/ConditionalExample.jsx` |
| 6   | Lists and keys                       | `src/examples/ListExample.jsx`        |
| 7   | Event handling                       | `src/examples/EventsExample.jsx`      |
| 8   | Forms / controlled components        | `src/examples/FormExample.jsx`        |
| 9   | Composition                          | `src/examples/CompositionExample.jsx` |
| 10  | Custom hooks                         | `src/hooks/`, `CustomHookExample.jsx` |
| 11  | Error boundaries                     | `src/components/ErrorBoundary.jsx`    |
| 12  | `memo`, `useMemo`, `useCallback`     | `src/examples/PerformanceExample.jsx` |
| -   | Todo app (everything together)       | `src/todo/`                           |

Props are validated with [PropTypes](https://github.com/facebook/prop-types).

## Official resources

- [React docs (react.dev)](https://react.dev/)
- [Quick Start](https://react.dev/learn)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [State: a component's memory](https://react.dev/learn/state-a-components-memory)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [Rendering lists](https://react.dev/learn/rendering-lists)
- [Reusing logic with custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Hooks reference](https://react.dev/reference/react/hooks)
- [Error boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Vite](https://vite.dev/)

## Suggested exercises

1. Add a "Clear completed" button to the Todo app.
2. Make a `Counter` component accept a `step` prop.
3. Write a `useFetch` custom hook that loads JSON from an API.
