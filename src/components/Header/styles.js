import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background-color: #f5f5f5;
  /* background-color: blue; */

  div {
    display: flex;
    align-items: baseline;
    gap: 8px;
    /* background-color: blueviolet; */
    width: 160px;
    height: 36px;
    margin-left: 100px;

    h1 {
      color: #333333;
      font-size: 30px;
      font-weight: 1000;
      font-family: "Inter", sans-serif;
    }
    h2 {
      font-size: 20px;
      color: #eb5757;
      font-weight: 1000;
      font-family: "Inter", sans-serif;
    }
  }
  & div + div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    height: 60px;
    width: 365px;
    margin-right: 5%;
    border: 2px solid #e0e0e0;
    border-radius: 8px;

    input {
      height: 100%;
      border: none;
      border-radius: 8px;
      padding: 0 0 0 15px;

      &::placeholder {
        font-family: "Inter", sans-serif;
      }
    }
    button {
      margin-right: 10px;
    }
  }
`;
