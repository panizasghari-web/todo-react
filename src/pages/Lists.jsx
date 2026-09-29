import { useContext, useEffect } from "react";
import TodoContext from "../context/TodoContext";
import Loading from "../components/Loading";
import FilterTodos from "../components/FilterTodos";
import CreateTodo from "../components/CreateTodo";
import UpdateTodo from "../components/UpdateTodo";
import DeleteTodo from "../components/DeleteTodo";

function Lists() {
  const { state, fetchTodos } = useContext(TodoContext);

  useEffect(() => {
    const fetchData = async () => {
      await fetchTodos();
    };
    fetchData();

    // ()();
    // (async () => {
    //   await fetchTodos();
    // })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container mx-auto my-15 px-4 sm:px-6 lg:px-8">
        <CreateTodo />

        <hr className="my-5 text-indigo-300" />

        <FilterTodos />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {state.fetch.error && (
            <div className="text-rose-500">{state.fetch.error}</div>
          )}
          {state.fetch.loading && <Loading />}

          {state.todos &&
            state.todos.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className={`flex justify-between items-center border border-gray-300 ${todo.completed ? "bg-gray-200" : ""} rounded py-5 px-3`}
                >
                  <p className={todo.completed ? "line-through" : ""}>
                    {todo.title}
                  </p>

                  <div className="flex items-center gap-x-3">
                    <UpdateTodo todo={todo} />

                    <DeleteTodo todoId={todo.id} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Lists;
