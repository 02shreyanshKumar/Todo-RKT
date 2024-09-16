import { createSlice,nanoid } from "@reduxjs/toolkit";
const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem("todos");
      if (serializedState === null) {
        return { todos: [] };
      }
      return { todos: JSON.parse(serializedState) };   } catch (e) {
      console.error("Could not load todos from localStorage", e);
      return { todos: [] }; 
    }
};

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state.todos); 
        localStorage.setItem("todos", serializedState);
    } catch (e) {
        console.error("Could not save todos to localStorage", e);
    }
};
const initialState=loadFromLocalStorage();
export const TodoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
            saveToLocalStorage(state)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
            saveToLocalStorage(state)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }
            saveToLocalStorage(state)
        },
        toggleTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload ? {...todo,completed:!todo.completed}: todo)
            saveToLocalStorage(state)
        }
    }
})
export  const {addTodo,removeTodo,updateTodo,toggleTodo}=TodoSlice.actions
export default TodoSlice.reducer;
