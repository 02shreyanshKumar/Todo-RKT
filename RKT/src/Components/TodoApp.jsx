import React from 'react';

import { useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import Todo from './Todo';

const TodoApp = () => {
  const todoes = useSelector((state) => state.todos.todos); 
  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <AddTodo/>
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todoes.map((todo) => (
            <div className="w-full" key={todo.id}>
              <Todo todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
