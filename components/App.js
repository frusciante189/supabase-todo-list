import React, { useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { useUser } from "../context/context";
import Todo from "./UI/Todo";

const App = () => {
  const {
    addTodo,
    setErrorText,
    newTaskText,
    setNextTaskText,
    todos,
    deleteTodo,
  } = useUser();
  return (
    <div className="bg-zinc-50 lg:py-20 sm:py-16 py-12">
      <div className="text-center">
        <h1 className="font-semibold text-zinc-900 lg:text-5xl sm:text-4xl text-3xl">
          Todo List
        </h1>
        <div className="mt-10 max-w-xl mx-auto lg:px-8 sm:px-6 px-4 ">
          <div className="relative">
            <input
              type="text"
              className="border-2 border-zinc-200 rounded-md text-zinc-800 block w-full p-4 focus:outline-2 focus:outline-transparent focus:ring focus:ring-teal-500 
              focus:border-transparent transition-all duration-200 ease-in-out peer focus:placeholder:text-teal-700 caret-teal-700"
              placeholder="Todo here"
              value={newTaskText}
              onChange={(e) => {
                setErrorText("");
                setNextTaskText(e.target.value);
              }}
            />
            <button
              className="absolute cursor-pointer inset-y-0 right-3 flex text-zinc-500 peer-focus:text-teal-500 items-center border-2 
            border-transparent my-2.5 px-1.5 rounded-lg peer-focus:border-teal-500 transition-all duration-200 ease-in-out"
              onClick={(e) => addTodo(newTaskText)}
            >
              <BsPlus size={24} className="" />
            </button>
          </div>
          <div className="mt-10 space-y-2">
            {todos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  deleteTodo={() => deleteTodo(todo.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
