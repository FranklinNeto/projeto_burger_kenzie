import styled from "styled-components";
export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  /*  justify-content: center; */
  margin-top: 2rem;

  gap: 0;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }
`;
