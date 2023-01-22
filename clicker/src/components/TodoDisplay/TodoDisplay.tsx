import React from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoDisplayProps {
  todo: Todo;
}

const TodoDisplay = ({ todo }: TodoDisplayProps) => {
  return (
    <div>
      <p>{todo.userId}</p>
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{`${todo.completed}`}</p>
    </div>
  );
};
export default TodoDisplay;
