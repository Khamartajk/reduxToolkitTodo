import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos : [{
    id:1, text : "Learn Redux Toolkit" }]
  }

  export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
      addTodo: {
        reducer(state, action) {
          state.todos.push(action.payload);
        },
        prepare(text) {
          return {
            payload: {
              id: nanoid(),
              text
            }
          };
        }
      },
      removeTodo(state, action) {
        const id = action.payload;
        state.todos = state.todos.filter(todo => todo.id !== id);
      }
    }
  });