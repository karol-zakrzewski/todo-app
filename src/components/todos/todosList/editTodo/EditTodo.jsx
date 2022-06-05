import React, { useState } from "react";
import { TODOS_URL } from "../../../../constants";
import { InputText, Li,Div } from "./EditTodo.styled";

const EditTodo = ({ title, completed, id, getTodos, cancelEditMode, setError }) => {
  const [isPending, setIsPending] = useState(false);
  const [inputValue, setInputValue] = useState({
    id: id,
    completed: completed,
    title: title,
  });

  const handleSaveClick = (e) => {
    if(e.key === "Enter"){
      setIsPending(true)
      fetch(`${TODOS_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
    .then((res) => {

      if (!res.ok) {
        return Promise.reject(res.statusText);
    }

      return res.json()
    })
      .then(() => {
        setError("")
        getTodos();
        setIsPending(false)
        cancelEditMode();
      })
      .catch( error=>{
        setError(error)
        setIsPending(false);        
      })
    }
    
  };

  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    cancelEditMode();
  };

  
  return (
    <Li>
      <Div onKeyDown={handleSaveClick}>
        <input type="checkbox" />
        <InputText
          type="text"
          name="title"
          autoFocus
          disabled={isPending}
          onBlur={handleCancel}
          value={inputValue.title}
          onChange={handleInput}                   
        />
      </Div>
    </Li>
  );
};

export default EditTodo;
