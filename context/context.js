import React, { useState, useEffect, createContext, useContext } from "react";
import { supabase } from "../lib/supabase";

const Context = createContext();

const Provider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTaskText, setNextTaskText] = useState("");
  const [errorText, setErrorText] = useState("");

  const fetchTodos = async () => {
    let { data: todos, error } = await supabase
      .from("todos")
      .select("*")
      .order("id", true);
    if (error) console.log("error", error);
    else setTodos(todos);
  };

  const addTodo = async (taskText) => {
    let task = taskText.trim();
    if (task.length) {
      let { data: todo, error } = await supabase
        .from("todos")
        .insert({ task, user_id: supabase.auth.user().id })
        .single();
      if (error) setErrorText(error.message);
      else setTodos([...todos, todo]);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const exposed = {
    addTodo,
    setErrorText,
    newTaskText,
    setNextTaskText,
    todos,
    setTodos,
  };
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};
export const useUser = () => useContext(Context);

export default Provider;
