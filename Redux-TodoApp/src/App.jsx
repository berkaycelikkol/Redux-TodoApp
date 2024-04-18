import TodoForm from './components/TodoForm';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='container'>
      <TodoForm />
      <TodoSearch />
      <TodoList />
    </div>
  );
}

export default App;
