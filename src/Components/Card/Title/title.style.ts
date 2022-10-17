import styled from "styled-components";

export const TitleStyled = styled.h2`
  color: var(--clr-orange);
  font-size: var(--fs-medium);
  font-weight: var(--fw-semibold);

  @media screen and (max-width: 900px) {
    font-size: var(--fs-big);
    text-align: center;
  }
`