import styled from "styled-components";

export const FormControl = styled.input`
    display: ${(props) => props.display || `block`};
    min-width: 500px;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgb(184 16 137 / 60%);
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    @media (max-width: 768px) {
        min-width: 300px;
    }

    &:focus-visible {
        outline-color: rgb(202 97 168 / 90%);
    }
`;
