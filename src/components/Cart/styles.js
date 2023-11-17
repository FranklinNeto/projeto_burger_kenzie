import styled from "styled-components";

export const Container = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;

  background: #ffff;

  margin-right: 3%;

  @media (min-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 1050px) {
    max-width: 915px;
    min-width: 680px;
    width: 92%;
    margin: 20px;
  }

  @media (max-width: 685px) {
    max-width: 95vw;
    min-width: 95vw;

    width: 95vw;

    /* margin-right: 10px; */
  }

  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: #27ae60; 
    color: #ffff;

    height: 65px;

    font-size: 18px;
    font-weight: 700;
    font-family: "Inter", sans-serif;

    border-radius: 5px 5px 0px 0px;

    @media (max-width: 1050px) {
      justify-content: center;
    }

    h2 {
      margin-left: 20px;
    }
  }

  ul {
    background: #f5f5f5;
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      border-radius: 0px 0px 10px 10px;

      height: 10rem;
      overflow: auto;

      h2 {
        color: #333333;
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        text-align: center;
      }

      p {
        color: #828282;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
      }
    }
  }
`;
