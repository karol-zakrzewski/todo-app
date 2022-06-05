import React, { useEffect, useState } from "react";
import { TODOS_URL, FETCH_REQUEST } from "../../constants";
import AddTodoInput from "./addTodo/AddTodoInput";
import TodoFooter from "./todoFooter/TodoFooter";
import { Routes, Route } from "react-router-dom";
import {
  StyledTodoAppContainer,
  StyledTodosSection,
  StyledToggleAllCheckbox,
  StyledToggleAllLabel,
} from "./Todos.styled";
import TodosList from "./todosList/TodosList";
import { v4 as uuidv4 } from "uuid";
import Error from "../error/Error";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const getTodos = () => {
    setIsPending(true);
    fetch(TODOS_URL)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }

        return res.json();
      })
      .then((data) => {
        setError("");
        setTodos(data);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error);
        setIsPending(false);
      });
  };

  const addTask = () => {
    setIsPending(true);

    if (!todo.trim() || todo.length <= 2 || todo.length >= 30) {
      setError("Your task needs to be between 2 and 30 characters");
      setIsPending(false);
      return;
    }

    fetch(`${TODOS_URL}`, {
      method: FETCH_REQUEST.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: uuidv4(), title: todo, completed: false }),
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }

        return res.json();
      })
      .then((data) => {
        setTodos([...todos, data]);
        setTodo("");
        setIsPending(false);
        setError("");
      })
      .catch((error) => {
        setError(error);
        setIsPending(false);
      });
  };

  const completeAll = () => {
    setIsPending(true);

    todos.forEach(({ id }) => {
      fetch(`${TODOS_URL}/${id}`, {
        method: FETCH_REQUEST.PATCH,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todos.every((todo) => todo.completed === true),
        }),
      })
        .then((res) => {
          if (!res.ok) {
            return Promise.reject(res.statusText);
          }

          return res.json();
        })
        .then(() => {
          setError("");          
          setIsPending(false);
        })
        .catch((error) => {
          setError(error);
          setIsPending(false);
        });
    });
    getTodos();
  };

  const clearCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.completed === true);

    completedTodos.forEach((todo) => {
      fetch(`${TODOS_URL}/${todo.id}`, {
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
          setIsPending(false);
        })
        .catch((error) => {
          setError(error);
          setIsPending(false);
        });
    });
    getTodos();
  };

  const renderActiveTodo = todos.filter((todo) => todo.completed === false);
  const renderCompletedTodo = todos.filter((todo) => todo.completed === true);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <StyledTodoAppContainer>
      {error && <Error error={error} />}
      <form onSubmit={handleSubmit}>
        <AddTodoInput todo={todo} setTodo={setTodo} isPending={isPending} />
        <StyledTodosSection>
          <StyledToggleAllCheckbox type="checkbox" id="toggle-all" />
          <StyledToggleAllLabel
            hidden={todos.length === 0}
            htmlFor="toggle-all"
            onClick={completeAll}
          ></StyledToggleAllLabel>
        </StyledTodosSection>
      </form>
      <Routes>
        <Route
          path="/"
          element={
            <TodosList todos={todos} getTodos={getTodos} setError={setError} />
          }
        />
        <Route
          path="active"
          element={
            <TodosList
              todos={renderActiveTodo}
              getTodos={getTodos}
              setError={setError}
            />
          }
        />
        <Route
          path="completed"
          element={
            <TodosList
              todos={renderCompletedTodo}
              getTodos={getTodos}
              setError={setError}
            />
          }
        />
      </Routes>
      {todos.length !== 0 && (
        <TodoFooter
          qtyActiveTodos={renderActiveTodo.length}
          clearCompleted={clearCompleted}
          qtyCompletedTodos={renderCompletedTodo.length}
        />
      )}
    </StyledTodoAppContainer>
  );
};

export default Todos;
