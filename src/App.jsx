import ComponentsExample from './examples/ComponentsExample'
import JsxExample from './examples/JsxExample'
import StateExample from './examples/StateExample'
import EffectExample from './examples/EffectExample'
import ConditionalExample from './examples/ConditionalExample'
import ListExample from './examples/ListExample'
import EventsExample from './examples/EventsExample'
import FormExample from './examples/FormExample'
import CompositionExample from './examples/CompositionExample'
import CustomHookExample from './examples/CustomHookExample'
import ErrorBoundaryExample from './examples/ErrorBoundaryExample'
import PerformanceExample from './examples/PerformanceExample'
import TodoApp from './todo/TodoApp'

// App is the root component. It simply stacks every example on one page.
// Open each file in src/examples to read the explanations.
export default function App() {
  return (
    <main>
      <h1>React Learning Project</h1>
      <ComponentsExample />
      <JsxExample />
      <StateExample />
      <EffectExample />
      <ConditionalExample />
      <ListExample />
      <EventsExample />
      <FormExample />
      <CompositionExample />
      <CustomHookExample />
      <ErrorBoundaryExample />
      <PerformanceExample />
      <TodoApp />
    </main>
  )
}
