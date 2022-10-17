import styled from "styled-components";

export const InterestWrapper = styled.div`
  width: 850px;
  margin: 0 auto 30px auto;

  @media screen and (max-width: 900px) {
    width: 95%;
  }
`
export const Title = styled.h3`
  color: var(--clr-text);
  margin-bottom: 25px;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`
export const CardsWrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(2, 400px);

  @media screen and (max-width: 450px) {
    grid-template-columns: unset;
    align-items: center;
    grid-gap: 25px;
  }

  @media screen and (max-width: 900px) {
    grid-gap: 8px;
    grid-template-columns: unset;
    margin: 0 auto;
    max-width: 400px;
  }
`