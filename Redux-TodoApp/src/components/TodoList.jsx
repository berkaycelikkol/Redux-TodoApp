import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../store';

function TodoList() {
  const dispatch = useDispatch();

  const { todos, todo } = useSelector(
    ({ form, todos: { data, searchTerm } }) => {
      const filteredTodos = data.filter((todo) =>
        todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        todos: filteredTodos,
        todo: form.todo,
      };
    }
  );
  const handleCarTodo = (todo) => {
    dispatch(removeTodo(todo.id));
  };

  const renderedTodos = todos.map((todo) => {
    return (
      <div className='todo' key={todo.id}>
        <span>{todo.todo}</span>
        <button className='btn btn-delete' onClick={() => handleCarTodo(todo)}>
          Delete
        </button>
      </div>
    );
  });
  return <div className='todo-list'>{renderedTodos}</div>;
}

export default TodoList;
