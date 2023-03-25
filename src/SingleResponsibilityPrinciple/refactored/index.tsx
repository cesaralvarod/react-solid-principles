// Código Mejorado

import { useFetchTodo } from './hooks/useFetchTodo'

// Ahora la responsabilidad del componente es solo renderizar nuestros todos
const TodoList = () => {
  const { todos, isFetching } = useFetchTodo()

  if (isFetching) return <p>...Loading</p>

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.id}</span>. <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
