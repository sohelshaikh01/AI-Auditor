import { createSlice, nanoid } from "@reduxjs/toolkit";
// Nanoid to create unique id.
// Using Slice in File name for proper naming convention

const initialState = {
    todos: [{
        id: 1,
        title: "Hello There!",
        desc: "Nothing is ok now."
    }]
}

export const todoSlice = createSlice({
    name: 'todo', // Pre-build property redux-toolkit
    initialState,
    reducers: {
        // state and action are two things present there.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                desc: action.payload.desc
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }, 
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;