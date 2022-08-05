import styled from "styled-components";

export const ContainerProductList = styled.ul`
  width: 65vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 1050px) {
    width: 100%;
  }

  @media (max-width: 680px) {
    flex-wrap: nowrap;
    width: 90vw;
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;
