import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: none;
  border-radius: 16px;
  border: 1px solid var(--clr-orange);
  color: var(--clr-orange);
  cursor: pointer;
  font-weight: var(--fw-semibold);
  padding: 5px 22px;
  transition: all .2s;

  :hover {
    background-color: var(--clr-orange);
    color: var(--clr-white);;
  }
`