import styled from "styled-components";

export const HouseDataWrapper = styled.div`
  margin: 25px auto 0 auto;
  width: 850px;

  @media screen and (max-width: 900px) {
    width: 95%;
  }
`
export const Description = styled.p`
  color: var(--clr-text);
  font-size: var(--fs-normal);
  margin: 25px 0 10px 0;

  @media screen and (max-width: 900px) {
    margin: 10px 0 10px 0;
  }
`
export const InnerFlex = styled.div`
  align-items: center;
  display: flex;
  gap: 25px;
`