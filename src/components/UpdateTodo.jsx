import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import Loadig from "./Loading";

function UpdateTodo({ todo }) {
  const { state, updateTodos } = useContext(TodoContext);

  const handleClick = async () => {
    await updateTodos(todo);
  };

  return (
    <>
      {state.update.loading && state.update.id == todo.id ? (
        <Loadig />
      ) : (
        <i
          onClick={handleClick}
          className={`bi ${todo.completed ? "bi-check-all" : "bi-check"} text-2xl cursor-pointer`}
        ></i>
      )}
    </>
  );
}

export default UpdateTodo;
