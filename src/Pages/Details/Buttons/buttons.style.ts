import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: grid;
  gap: 15px;
  grid-auto-flow: column;
  justify-content: end;
  margin: 0 auto;
  width: 850px;

  @media screen and (max-width: 900px) {
    width: 95%;
  }
`