import styled from "styled-components";

export const LiCardProduct = styled.li`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  /* margin-right: 10px; */
  margin-bottom: 20px;

  background: #f5f5f5;
  border-radius: 0px 5px 5px 5px;

  div {
    display: flex;
    gap: 10px;

    figure {
      background: #e0e0e0;
      border-radius: 5px;
      width: 80px;
      height: 80px;
      img {
        width: 70px;
        height: 70px;
      }
    }

    .card-product--descricao {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 15px;

      h2 {
        font-weight: 700;
        font-size: 14px;
        color: #333333;
        width: 170px;
        margin-top: 10px;
      }
      p {
        font-weight: 400;
        font-size: 12px;
        color: #828282;
      }
    }
  }

  button {
    font-weight: 500;
    font-size: 10px;

    margin-top: 5px;
    margin-right: 10px;

    background-color: #f5f5f5;
    color: #bdbdbd;

    width: 51px;
    height: 15px;
    border: none;
    cursor: pointer;
  }
`;