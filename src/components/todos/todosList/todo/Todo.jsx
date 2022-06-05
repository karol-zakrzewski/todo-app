import React, { useState } from "react";
import { FETCH_REQUEST, TODOS_URL } from "../../../../constants";
import {
  StyledTaskItem,
  StyledButton,
  StyledDiv,
  StyledSpan,
} from "./Todo.styled";

const Todo = ({ title, completed, id, getTodos, enterEditMode, setError }) => {
  const [isPending, setIsPending] = useState(false);

  const deleteTodo = (id) => {
    setIsPending(true);
    fetch(`${TODOS_URL}/${id}`, {
      method: FETCH_REQUEST.DELETE,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }

        return res.json();
      })
      .then(() => {
        setError("");
        getTodos();
        setIsPending(false);
      })
      .catch((error) => {
        setError(error);
        setIsPending(false);
      });
  };

  const handleChange = () => {
    setIsPending(true);
    fetch(`${TODOS_URL}/${id}`, {
      method: FETCH_REQUEST.PATCH,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }

        return res.json();
      })
      .then(() => {
        setError("");
        getTodos();
        setIsPending(false);
      })
      .catch((error) => {
        setError(error);
        setIsPending(false);
      });
  };

  const handleClick = () => {
    deleteTodo(id);
  };

  const handleEdit = () => {
    enterEditMode(id);
  };
  return (
    <StyledTaskItem>
      <StyledDiv completed={completed}>
        <input
          type="checkbox"
          checked={completed}
          disabled={isPending}
          onChange={handleChange}
        />
        <StyledSpan onDoubleClick={handleEdit}>{title}</StyledSpan>
      </StyledDiv>
      <StyledButton disabled={isPending} onClick={handleClick}>
        x
      </StyledButton>
    </StyledTaskItem>
  );
};

export default Todo;
