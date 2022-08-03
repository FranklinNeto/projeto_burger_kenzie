import styled from "styled-components";

export const LiMainCardProduct = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: grey;
  margin: 0.2rem;
  border-radius: 5px;
  box-sizing: border-box;

  border: 2px solid #e0e0e0;
  border-radius: 5px;

  width: 300px;
  height: 346px;

  figure {
    display: flex;
    justify-content: center;

    background: #f5f5f5;
    width: 100%;
    height: 150px;

    img {
      width: 162px;
      height: 162px;
    }
  }

  div {
    background-color: red;
    background-color: #ffff;
    width: 100%;
    height: 196px;

    border-radius: 0 0 5px 5px;
    /* border: 2px solid #e0e0e0; */

    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      margin-top: 28px;
      font-weight: 700;
      font-size: 18px;
      font-family: "Inter", sans-serif;

      color: #333333;
      margin-left: 22px;
    }

    span {
      margin-left: 21px;
      font-weight: 400;
      font-size: 12px;
      font-family: "Inter", sans-serif;
      color: #828282;
    }
    p {
      margin-left: 21px;
      font-weight: 600;
      font-size: 14px;
      font-family: "Inter", sans-serif;
      color: #27ae60;
    }

    button {
      margin-left: 20px;
      margin-bottom: 23px;
    }
  }
`;
