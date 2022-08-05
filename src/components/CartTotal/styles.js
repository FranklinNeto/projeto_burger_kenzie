import styled from "styled-components";

export const ContainerCartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f5f5f5;
  padding-top: 1.5rem;
  border-top: solid 3px #e0e0e0;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: 600;
      font-size: 14px;
      font-family: "Inter", sans-serif;
      color: #333333;
      margin-left: 10px;
    }

    p {
      font-weight: 600;
      font-size: 14px;
      font-family: "Inter", sans-serif;
      color: #828282;
      margin-right: 10px;
    }
  }

  div + div {
    display: flex;
    justify-content: center;

    button {
      background-color: #e0e0e0;
      color: #828282;

      font-weight: 600;
      font-size: 16px;
      font-family: "Inter", sans-serif;
      border: 2px solid #e0e0e0;
      border-radius: 8px;

      width: 95%;
      height: 60px;

      cursor: pointer;

      margin-top: 22px;
      margin-bottom: 20px;
    }

    button:hover {
      background-color: #828282;
      color: #e0e0e0;
      border: 2px solid #828282;
    }
  }
`;
