import styled from "styled-components";

export const FormGroup = styled.div`
    display: ${(props) => props.display || `flex`};
    align-items: ${(props) => props.alignItems || `baseline`};
    justify-content: ${(props) => props.justifyContent || `space-around`};
    margin-top: ${(props) => props.mt || `15px`};
    margin-right: ${(props) => props.mr || `0px`};
    margin-bottom: ${(props) => props.mb || `15px`};
    margin-left: ${(props) => props.ml || `0px`};
`;
