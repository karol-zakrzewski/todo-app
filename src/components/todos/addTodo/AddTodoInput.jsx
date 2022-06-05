import { InputText } from "./AddTodoInput.styled";

const AddTodoInput = ({ todo, setTodo, isPending }) => {
  const handleInputText = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <InputText
        type="text"
        placeholder="What needs to be done"
        value={todo}
        onChange={handleInputText}
        disabled={isPending}
        autoFocus
      />
    </>
  );
};

export default AddTodoInput;
