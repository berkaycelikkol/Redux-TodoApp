import { changeSearchTerm } from '../store';
import { useDispatch, useSelector } from 'react-redux';

function TodoSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.todos.searchTerm;
  });

  const handleSearchTermChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className='todo-search'>
      <h2>My Todos</h2>
      <input
        className='input'
        type='text'
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder='search'
      />
    </div>
  );
}

export default TodoSearch;
