import { useEffect, useState } from 'react'
import { fetchTodos } from '../services/todos'
import type { TodoType } from '../types/TodoType'

export const useFetchTodo = () => {
  const [data, setData] = useState<TodoType[]>([]) // guardando los datos del fetch
  const [isFetching, setIsFetching] = useState<boolean>(true) // saber si esta cargando

  useEffect(() => {
    fetchTodos()
      .then(todos => setData(todos))
      .finally(() => setIsFetching(false))
  }, [])

  return { todos: data, isFetching }
}
