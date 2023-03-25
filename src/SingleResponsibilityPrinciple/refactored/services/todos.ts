import axios from 'axios'

export const fetchTodos = async () => {
  return axios
    .get<TodoType[]>('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.data)
  /* .catch(error => {
      if (error.code === 404) throw new Error('Not found')
    }) */
}
