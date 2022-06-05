import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: brown;
  font-size: 24px;
  font-weight: 700;
    display: none;
  
`;

export const StyledTaskItem = styled.li`
box-sizing: border-box;
  width: 100%;
  color: #4d4d4d;
  padding: 15px;
  font-size: 24px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;


  &:hover{    
    ${StyledButton}{
        display: block;
    }
  }
  
`;

export const StyledDiv = styled.div`
width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: ${props => props.completed && "line-through"};
  color: ${props => props.completed && "lightgrey"}
`;

export const StyledSpan = styled.span`
width: 100%;
margin-left: 15px;
`;


