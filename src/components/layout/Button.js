import styled from "styled-components";

import { backgroundColorButton } from "../constants/layout";

export const Button = styled.button`
    background-color: ${(props) => props.backgroundColor || `${backgroundColorButton}`};
    display: ${(props) => props.display || "inline-block"};
    color: ${(props) => props.color || "#fff"};
    text-align: ${(props) => props.textAlign || "center"};
    vertical-align: ${(props) => props.verticalAlign || "middle"};
    cursor: ${(props) => props.cursor || "pointer"};
    border-radius: ${(props) => props.borderRadius || ".25rem"};
    border: 1px solid transparent;
    padding: 3px 7px;
    &:active {
        background-color: #57093d;
    }
    &:hover {
        background-color: #4b0e37;
    }
    &:focus {
        box-shadow: 0 0 0 0.2rem rgb(193 38 255 / 50%);
    }
    &:not(:disabled):not(.disabled):active:focus {
        box-shadow: 0 0 0 0.2rem rgb(193 38 255 / 50%);
    }
`;
