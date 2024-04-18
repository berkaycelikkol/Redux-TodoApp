import { useDispatch, useSelector } from 'react-redux';
import { changeTodo, addTodo } from '../store';

function TodoForm() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.form.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
  };
  const handleTodoChange = (e) => {
    dispatch(changeTodo(e.target.value));
  };
  return (
    <div className='todo-form'>
      <h3>Todo App</h3>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          value={todo}
          onChange={handleTodoChange}
          maxLength='70'
        />
        <button className='btn submit-btn'>Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
