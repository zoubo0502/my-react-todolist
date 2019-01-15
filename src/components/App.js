import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodos from "../containers/VisibleTodos";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
    <AddTodo />
    <VisibleTodos />
    <Footer />
  </div>
  )
};

export default App;
