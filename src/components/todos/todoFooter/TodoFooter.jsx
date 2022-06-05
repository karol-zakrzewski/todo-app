import React from "react";
import { FilterLink, Footer } from "./TodoFooter.styled";

const TodoFooter = ({ qtyActiveTodos, clearCompleted, qtyCompletedTodos }) => {

  return (
    <Footer>
      <span>
        {qtyActiveTodos} {qtyActiveTodos === 1 ? "item" : "items"} left
      </span>
      <ul>
        <li>
          <FilterLink to="">All</FilterLink>
        </li>
        <li>
          <FilterLink to="active">Active</FilterLink>
        </li>
        <li>
          <FilterLink to="completed">Completed</FilterLink>
        </li>
      </ul>
      {qtyCompletedTodos > 0 && <button onClick={clearCompleted}>Clear completed</button>}
      
    </Footer>
  );
};

export default TodoFooter;
