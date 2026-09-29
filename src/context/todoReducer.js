const todoReducer = (state, action) => {
  switch (action.type) {
    // FETCH TODOS
    case "FETCH_start":
      return { ...state, fetch: { loading: true, error: null } };
    case "FETCH":
      return {
        ...state,
        todos: action.payload,
        fetch: { loading: false, error: null },
      };
    case "FETCH_error":
      return { ...state, fetch: { loading: false, error: action.payload } };

    // FILTER TODOS
    case "FILTER_start":
      return { ...state, filter: { loading: true, error: null } };
    case "FILTER":
      return {
        ...state,
        todos: action.payload,
        filter: { loading: false, error: null },
      };
    case "FILTER_error":
      return { ...state, filter: { loading: false, error: action.payload } };

    // CREATE TODOS
    case "CREATE_start":
      return { ...state, create: { loading: true, error: null } };
    case "CREATE":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        create: { loading: false, error: null },
      };
    case "CREATE_error":
      return { ...state, create: { loading: false, error: action.payload } };

    // UPDATE TODOS
    case "UPDATE_start":
      return {
        ...state,
        update: { loading: true, error: null, id: action.id },
      };
    case "UPDATE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id == action.payload.id ? action.payload : todo;
        }),
        update: { loading: false, error: null, id: action.id },
      };
    case "UPDATE_error":
      return {
        ...state,
        update: { loading: false, error: action.payload, id: action.id },
      };

    // DELETE TODOS
    case "DELETE_start":
      return {
        ...state,
        delete: { loading: true, error: null, id: action.id },
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
        delete: { loading: false, error: null, id: action.id },
      };
    case "DELETE_error":
      return {
        ...state,
        delete: { loading: false, error: action.payload, id: action.id },
      };

    default:
      return state;
  }
};
export default todoReducer;
