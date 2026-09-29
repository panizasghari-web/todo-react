import { useReducer } from "react";
import TodoContext from "./TodoContext";
import todoReducer from "./todoReducer";
import { toast } from "react-toastify";

function TodoProvider({ children }) {
  const initialState = {
    todos: [],
    fetch: { loading: false, error: null },
    filter: { loading: false, error: null },
    create: { loading: false, error: null },
    update: { loading: false, error: null, id: null },
    delete: { loading: false, error: null },
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const fetchTodos = async () => {
    dispatch({ type: "FETCH_start" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!res.ok)
        throw new Error(
          `Failed to fetch Todos data!, HTTP status: ${res.status}`,
        );

      const data = await res.json();

      dispatch({ type: "FETCH", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_error", payload: error.message });
    }
  };

  const filterTodos = async (count) => {
    dispatch({ type: "FILTER_start" });

    console.log(
      `https://jsonplaceholder.typicode.com/todos${count === "all" ? "" : `?_limit=${count}`}`,
    );

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos${count === "all" ? "" : `?_limit=${count}`}`,
      );
      if (!res.ok)
        throw new Error(
          `Failed to filter Todos data!, HTTP status: ${res.status}`,
        );

      const data = await res.json();

      dispatch({ type: "FILTER", payload: data });
    } catch (error) {
      dispatch({ type: "FILTER_error", payload: error.message });
    }
  };

  const createTodos = async (title) => {
    dispatch({ type: "CREATE_start" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({ title, completed: false }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok)
        throw new Error(`Failed to create Todo!, HTTP status: ${res.status}`);

      const data = await res.json();

      dispatch({
        type: "CREATE",
        payload: { ...data, id: Math.random().toString(36).slice(2, -1) },
      });

      toast.success("Task created successfully!");
    } catch (error) {
      dispatch({ type: "CREATE_error", payload: error.message });
    }
  };

  const updateTodos = async (todo) => {
    dispatch({ type: "UPDATE_start", id: todo.id });

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: todo.title,
            completed: !todo.completed,
          }),
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!res.ok)
        throw new Error(`Failed to update Todo!, HTTP status: ${res.status}`);

      const data = await res.json();

      dispatch({
        type: "UPDATE",
        payload: data,
        id: todo.id,
      });

      toast.success("Task updated successfully!");
    } catch (error) {
      dispatch({ type: "UPDATE_error", payload: error.message, id: todo.id });
      toast.error(error.message);
    }
  };

  const deleteTodos = async (todoId) => {
    dispatch({ type: "DELETE_start", id: todoId });

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok)
        throw new Error(`Failed to delete Todo!, HTTP status: ${res.status}`);

      const data = await res.json();
      console.log(data)

      dispatch({
        type: "DELETE",
        payload: todoId,
      });

      toast.warn("Task Deleted successfully!");
    } catch (error) {
      dispatch({ type: "DELETE_error", payload: error.message, id: todoId });
      toast.error(error.message);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        fetchTodos,
        filterTodos,
        createTodos,
        updateTodos,
        deleteTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
