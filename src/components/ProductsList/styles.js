import styled from "styled-components";

export const ContainerProductList = styled.div`
  section {
    display: flex;
    flex-direction: column;
    /* align-items: flex-start;
    justify-content: flex-start; */
    margin-left: 2.5%;
    > h2 {
      color: red;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      color: #333333;
      margin-bottom: 1rem;

      > span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color: #828282;
      }
    }
  }

  ul {
    width: 65vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1050px) {
    ul {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    ul {
      flex-wrap: nowrap;
      width: 90vw;
      overflow-x: scroll;
      justify-content: flex-start;
    }
  }
`;
