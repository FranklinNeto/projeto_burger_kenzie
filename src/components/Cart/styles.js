import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  width: 365px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* background-color: #f5f5; */
  background: #f5f5f5;

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

    margin-bottom: 20px;

    h2 {
      margin-left: 20px;
    }
  }

  ul {
    /*  background-color: red; */
  }
`;
