import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    align-content: ${(props) => props.alignContent};
    justify-content: ${(props) => props.justifyContent || `space-between`};
`;
