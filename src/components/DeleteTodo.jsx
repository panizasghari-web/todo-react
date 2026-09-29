import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import Loadig from "./Loading";

function DeleteTodo({ todoId }) {
  const { state, deleteTodos } = useContext(TodoContext);

  const handleDelete = async () => {
    await deleteTodos(todoId);
  };

  return (
    <>
      {state.delete.loading && state.delete.id == todoId ? (
        <Loadig />
      ) : (
        <i
          onClick={handleDelete}
          className="bi bi-trash-fill cursor-pointer"
        ></i>
      )}
    </>
  );
}

export default DeleteTodo;
