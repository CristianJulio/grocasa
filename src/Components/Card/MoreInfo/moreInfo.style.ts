import { Link } from "react-router-dom";
import styled from "styled-components";

export const MoreInfoStyled = styled(Link)`
  background-color: var(--clr-white);
  border-radius: 20px;
  border: 1px solid var(--clr-orange);
  color: var(--clr-orange);
  cursor: pointer;
  font-weight: var(--fw-semibold);
  padding: 5px 30px;
  text-decoration: none;
  transition: all .2s;

  &:hover {
    background-color: var(--clr-orange);
    color: var(--clr-white);
  }
`