import React from "react";
import { FiTrash } from "react-icons/fi";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className="text-left flex space-x-4 items-center">
      <p className="border-2 font-medium p-4 rounded-md flex-1 text-zinc-800 transition-all duration-200 ease-in-out transform hover:border-transparent hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-500 hover:text-zinc-50 cursor-pointer">
        {todo.task}
      </p>
      <FiTrash
        size={20}
        className="text-teal-500 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          deleteTodo();
        }}
      />
    </div>
  );
};

export default Todo;
