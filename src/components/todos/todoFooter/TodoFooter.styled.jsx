import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const Footer = styled.footer`
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    display: flex;
    position:relative;

    button{
        border:none;
        color:inherit;
        background-color: transparent;
        padding: 3px 7px;
        cursor: pointer;
        position: absolute;
        right: 5px;

        &:hover{
            text-decoration: underline;
        }
    }
    
    ul{
        list-style: none;
        padding: 0;
        margin: 0 0 0 40px;
        display: flex;
        gap: 5px;        
    }

`
export const FilterLink = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    margin: 3px;
    padding: 3px 7px;
    background-color: transparent;
    border: none;
    border-radius: 3px;

    &.active{
        border: 1px solid #af2f2f84;
    }

    &:hover{
        border: 1px solid #af2f2f5c;
    }
`