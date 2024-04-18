import { createSlice } from '@reduxjs/toolkit';
import { addTodo } from './TodosSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    todo: '',
  },
  reducers: {
    changeTodo(state, action) {
      state.todo = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addTodo, (state, action) => {
      state.todo = '';
    });
  },
});

export const { changeTodo } = formSlice.actions;

export const formReducer = formSlice.reducer;
