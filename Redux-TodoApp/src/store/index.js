import { configureStore } from '@reduxjs/toolkit';
import {
  todosReducer,
  addTodo,
  removeTodo,
  changeSearchTerm,
} from './slices/TodosSlice';
import { formReducer, changeTodo } from './slices/FormSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    form: formReducer,
  },
});

export { store, changeTodo, addTodo, removeTodo, changeSearchTerm };
