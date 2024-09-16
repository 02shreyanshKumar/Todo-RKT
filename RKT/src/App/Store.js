import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../Features/Todo/TodoSlice'
const Store =configureStore({
    reducer: { todos: TodoReducer }, 
})
export {Store}