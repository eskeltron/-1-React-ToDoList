import styled from "styled-components";

export const ContainerBody = styled.div`
    position: relative;
    margin-bottom: 30px;
    &:after {
        content: "";
        width: 100%;
        border-bottom: solid 1px rgb(184 16 137 / 60%);
        position: absolute;
        left: 0;
        border-radius: 50%;
    }
`;
