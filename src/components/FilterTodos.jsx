import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import Loading from "./Loading";

function FilterTodos() {
  const { state, filterTodos } = useContext(TodoContext);

  const handleFilter = async (e) => {
    // console.log(e.target.value);
    await filterTodos(e.target.value);
  };

  return (
    <>
      <div className="mb-4">
        <p className="font-medium text-gray-700">Filter:</p>
        <select
          onChange={handleFilter}
          className="w-50 mt-1 rounded border border-gray-300 py-2 px-2 shadow-md focus:border-indigo-600 focus:outline-hidden"
        >
          <option value="all">all</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="50">50</option>
        </select>
      </div>
      <div className="my-3">
        {state.filter.error && (
          <div className="text-rose-500">{state.filter.error}</div>
        )}
        {state.filter.loading && <Loading />}
      </div>
    </>
  );
}

export default FilterTodos;
