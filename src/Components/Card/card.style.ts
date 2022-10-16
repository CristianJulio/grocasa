import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
`
export const MainImg = styled.img`
  height: 130px;
  width: 100%;
`
export const Title = styled.h2`
  color: var(--clr-orange);
  font-size: var(--fs-medium);
  font-weight: var(--fw-semibold);
`
export const Location = styled.p`
  color: var(--clr-light-grey);
  font-size: var(--fs-normal);
`
export const FlexWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`
export const Icons = styled.div`
  align-items: center;
  display: flex;
`
export const Amount = styled.span`
  align-self: center;
  color: var(--clr-text);
  font-size: var(--fs-big);
  font-weight: var(--fw-semibold);
`
export const MoreInfo = styled(Link)`
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