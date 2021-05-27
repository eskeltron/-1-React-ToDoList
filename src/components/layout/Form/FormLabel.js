import styled from "styled-components";

export const FormLabel = styled.label`
    width: ${(props) => props.bold ?? `110px`};
    text-align: ${(props) => props.textAlign ?? `left`};
`;
