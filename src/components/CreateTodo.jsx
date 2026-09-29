import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import Loading from "./Loading";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const { state, createTodos } = useContext(TodoContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodos(title);
  };

  return (
    <>
      <h1 className="font-bold text-xl mb-5">Create ToDo:</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-x-3">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-100 rounded border border-gray-300 py-2 px-2 shadow-md focus:border-indigo-600 focus:outline-hidden"
            placeholder="ToDo Title"
          />

          <button
            disabled={state.create.loading || title === ""}
            type="submit"
            className="disabled:opacity-75 disabled:cursor-not-allowed flex justify-center items-center gap-2 cursor-pointer rounded-sm border border-indigo-600 bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
          >
            Create
            {state.create.loading && <Loading />}
          </button>
        </div>
        <p className="text-xs text-red-500 mt-1">
          {title ? "" : "Title is required!"}
        </p>

        {state.create.error && (
          <div className="text-rose-500">{state.create.error}</div>
        )}
      </form>
    </>
  );
}

export default CreateTodo;
