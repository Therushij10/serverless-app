import { API } from 'aws-amplify';

const apiName = 'todos';

export const listTodos = async () => {
  return await API.get(apiName, '/todos');
};

export const createTodo = async (todo) => {
  return await API.post(apiName, '/todos', { body: todo });
};

export const updateTodo = async (todo) => {
  return await API.put(apiName, `/todos/${todo.id}`, { body: todo });
};

export const deleteTodo = async (id) => {
  return await API.del(apiName, `/todos/${id}`);
};
