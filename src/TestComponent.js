import React from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import Link from "./components/Link";

export const TestComponent = () => {
  const todos = [
    { id: 1, text: "test1", completed: false },
    { id: 2, text: "test2", completed: true }
  ];
  return (
    <div>
      <Todo text={"testTodo"} onClick={() => alert("ok")} />
      <TodoList todoClick={() => alert("testTodoList")} todos={todos} />
      <Link active={true} onClick={()=>alert("testLink")}>
        aaaa
      </Link>
      <Link active={false} onClick={()=>alert("testLink")}>
        bbbb
      </Link>
    </div>
  );
};
