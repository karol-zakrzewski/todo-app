import styled from "styled-components"

export const Li = styled.li`
    box-sizing: border-box;
  width: 100%;
  color: #4d4d4d;
  padding: 0px 0px 0px 15px;
  font-size: 24px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  
`

export const InputText = styled.input`
    width: 100%;
    height: 60px;
    color: #4d4d4d;
    font-size: 24px;
    
    &:focus{
        border: 1px solid #999;
    box-shadow: inset 0px -1px 5px #4d4d4d;
    }
`

export const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`