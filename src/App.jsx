import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import TodoProvider from "./context/TodoProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        {/* ################################################ */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/lists"
            element={
              <TodoProvider>
                <Lists />
              </TodoProvider>
            }
          />
        </Routes>
        <ToastContainer />
      </HashRouter>
    </>
  );
}

export default App;
