import styled from "styled-components";

export const LiCardProduct = styled.li`
  display: flex;
  justify-content: space-between;
  /*  align-items: flex-start; */
  margin-left: 0.5rem;

  background: #f5f5f5;
  border-radius: 0px 5px 5px 5px;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 390px) {
    width: 95%;
    justify-content: flex-start;
  }

  div {
    display: flex;
    gap: 10px;
    /*  background-color: red; */

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
        font-family: "Inter", sans-serif;
        color: #333333;
        width: 170px;
        margin-top: 10px;
      }
      @media (max-width: 390px) {
        h2 {
          font-size: 18px;
        }
      }
      p {
        font-weight: 400;
        font-size: 12px;
        font-family: "Inter", sans-serif;
        color: #828282;
      }

      span {
        font-weight: 700;
        font-size: 12px;
        font-family: "Inter", sans-serif;
        color: #333333;
      }
    }
  }

  button {
    font-weight: 500;
    font-size: 12px;
    font-family: "Inter", sans-serif;

    margin-top: 5px;
    margin-right: 12px;

    background-color: #f5f5f5;
    color: #bdbdbd;

    width: 51px;
    height: 15px;
    border: none;
    cursor: pointer;

    &:hover {
      color: #828282;
    }
  }
`;
