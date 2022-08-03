import styled from "styled-components";

export const ContainerCartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: 600;
      font-size: 14px;
      color: #333333;
      margin-left: 10px;
    }

    p {
      font-weight: 600;
      font-size: 14px;
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
      border: 2px solid #e0e0e0;
      border-radius: 8px;

      width: 343px;
      height: 60px;

      cursor: pointer;
    }

    button:hover {
      background-color: #828282;
      color: #e0e0e0;
      border: 2px solid #828282;
    }
  }
`;