import styled, { keyframes } from "styled-components";

const createAnimation = keyframes`
    0% {  width:300px; opacity: 0 }
    100% {  width: 100%; opacity: 1; }
`;

export const ContainerCard = styled.div`
    background-color: #fff;
    border-radius: 0.25rem;
    padding: 0.5rem;
    border: 1px solid #9d004fa1;
    animation-name: ${createAnimation};
    animation-duration: 0.5s;
    overflow: hidden;
    max-width: 628px;

    @media (max-width: 768px) {
        max-width: 415px;
    }
`;
