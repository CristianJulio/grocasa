import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
  margin: 0 auto;
  width: 850px;

  @media screen and (max-width: 900px) {
    width: 400px;
    margin-bottom: 25px;
  }
  
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`