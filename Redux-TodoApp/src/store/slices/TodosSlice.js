import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addTodo(state, action) {
      state.data.push({
        todo: action.payload,
        id: nanoid(),
      });
    },
    removeTodo(state, action) {
      const updated = state.data.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addTodo, removeTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
