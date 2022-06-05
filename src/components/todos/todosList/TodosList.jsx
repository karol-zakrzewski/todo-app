import { StyledTaskList } from "../Todos.styled";
import Todo from "./todo/Todo";
import EditTodo from "./editTodo/EditTodo";
import { useState } from "react";

const TodosList = ({ todos, getTodos,  setError}) => {
  const [editId, setEditId] = useState(null);

  const enterEditMode = (id) => {
    setEditId(id);
  };

  const cancelEditMode = () => {
    setEditId(null);
  };  

  const renderTodos = todos.map(({ id, title, completed }) => {
    return id === editId ? (
      <EditTodo
        key={id}
        title={title}
        completed={completed}
        id={id}
        getTodos={getTodos}
        cancelEditMode={cancelEditMode}
        setError={setError}
      />
    ) : (
      <Todo
        key={id}
        title={title}
        completed={completed}
        id={id}
        getTodos={getTodos}
        enterEditMode={enterEditMode}
        setError={setError}
      />
    );
  });

  return <StyledTaskList>{renderTodos}</StyledTaskList>;
};

export default TodosList;
