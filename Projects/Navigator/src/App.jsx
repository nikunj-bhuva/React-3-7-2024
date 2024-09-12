import Carousel from "./components/Carousel.jsx";
import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp.jsx";
import ModeValue from "./context/ModeContext.jsx";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoAppData from "./components/TodoAppData.jsx";
import TodoUsersCount from "./components/TodoUsersCount.jsx";

const App = () => {
  // debugger;
  let [modeValue, setModeValue] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [addItems, setAddItems] = useState([]); //add items state.

  console.log(addItems);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Carousel />
        </>
      ),
    },
    {
      path: "/todoapp",
      element: (
        <>
          <Navbar />
          <TodoApp
            userValue={userValue}
            setUserValue={setUserValue}
            addItems={addItems}
            setAddItems={setAddItems}
          />
        </>
      ),
    },
    {
      path: "/todoappdata",
      element: (
        <>
          <Navbar />
          <h1 className="text-center mt-5 mb-5 bg-warning-subtle p-3 fw-bold">
            Todo App Data
          </h1>
          <TodoAppData
            addItems={addItems}
            setAddItems={setAddItems}
            setUserValue={setUserValue}
            userValue={userValue}
          />
        </>
      ),
    },
    {
      path: "/todousers",
      element: (
        <>
          <Navbar />
          <h1 className="text-center bg-warning-subtle p-3 fw-bold mt-5 mb-5 rounded-5">
            Todo Users Count
          </h1>
          <TodoUsersCount addItems={addItems} />
        </>
      ),
    },
  ]);

  return (
    <>
      <ModeValue.Provider value={{ modeValue, setModeValue }}>
        <RouterProvider router={router}></RouterProvider>
      </ModeValue.Provider>
    </>
  );
};

export default App;
