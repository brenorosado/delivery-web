import styled from "styled-components";

export const AuthLayoutSection = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AuthContenteContainer = styled.div`
    box-shadow: 0 0 clamp(16px, 0.833vw, 0.833vw) gray;
    border-radius: clamp(16px, 0.833vw, 0.833vw);
    padding: clamp(16px, 0.833vw, 0.833vw);
    width: clamp(200px, 20vw, 20vw);
`;