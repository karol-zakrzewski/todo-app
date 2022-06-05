import styled from "styled-components";

export const StyledTodoAppContainer = styled.div`
  width: 500px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

export const StyledTodosSection = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`;

export const StyledToggleAllLabel = styled.label`
  width: 60px;
  height: 34px;
  font-size: 0;
  position: absolute;
  top: -52px;
  left: -13px;
  transform: rotate(90deg);

  &::before {
    content: "❯";
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }
`;

export const StyledToggleAllCheckbox = styled.input.attrs({ type: "checkbox" })`
  text-align: center;
  border: none;
  opacity: 0;
  position: absolute;
`;

export const StyledTaskList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
`;
